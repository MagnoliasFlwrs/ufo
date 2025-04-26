import { Box, Typography } from "@mui/material";
import { useUserStore } from "@/store/store";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, TimeScale, Tooltip, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

ChartJS.register(LineElement, PointElement, LinearScale, TimeScale, Tooltip, Filler);

export const Schedule = () => {
  // Real data from store (only for labels and calculations)
  const realUserWeight = Number(useUserStore((state) => state.weight));
  const realIdealWeight = Number(useUserStore((state) => state.idealWeight));
  if (isNaN(realUserWeight) || isNaN(realIdealWeight)) return null;

  // Calculate weight difference
  const weightDifference = Math.abs(realUserWeight - realIdealWeight);

  // Determine which dataset to use based on weight difference
  const isSmallDifference = weightDifference <= 3; // 0 включается автоматически

  // Fixed chart parameters
  const chartUserWeight = isSmallDifference ? 100 : 120;
  const chartIdealWeight = 100;
  const chartDaysDuration = 180;

  // Date calculations for labels (based on real data)
  const currentUnix = Math.floor(Date.now() / 1000);
  const weeksNeeded = weightDifference === 0 ? 0 : weightDifference / 0.5; // избегаем деления на 0
  const goalUnix = currentUnix + weeksNeeded * 7 * 24 * 60 * 60;
  const goalDate = new Date(goalUnix * 1000);

  // Fixed dates for the chart
  const now = new Date();
  const chartEndDate = new Date(now.getTime() + chartDaysDuration * 24 * 60 * 60 * 1000);
  const chartGoalDate =
    weightDifference === 0
      ? now // если разницы нет, цель - сейчас
      : new Date(now.getTime() + chartDaysDuration * 0.6 * 24 * 60 * 60 * 1000);

  // Y-axis settings
  const yMin = isSmallDifference ? 85 : 95;
  const yMax = isSmallDifference ? 115 : 125;

  // Chart data points (dynamic based on weight difference)
  const progressDataBeforeGoal = isSmallDifference
    ? [
        { x: now, y: chartUserWeight },
        {
          x: new Date(now.getTime() + chartDaysDuration * 0.15 * 86400000),
          y: chartUserWeight - (weightDifference === 0 ? 0 : 3),
        },
        {
          x: new Date(now.getTime() + chartDaysDuration * 0.3 * 86400000),
          y: chartUserWeight + (weightDifference === 0 ? 0 : 2),
        },
        {
          x: new Date(now.getTime() + chartDaysDuration * 0.45 * 86400000),
          y: chartUserWeight - (weightDifference === 0 ? 0 : 3),
        },
        { x: new Date(now.getTime() + chartDaysDuration * 0.6 * 86400000), y: chartUserWeight - 0 },
        { x: chartGoalDate, y: chartIdealWeight },
      ]
    : [
        { x: now, y: chartUserWeight },
        { x: new Date(now.getTime() + chartDaysDuration * 0.1 * 86400000), y: chartUserWeight - 2 },
        { x: new Date(now.getTime() + chartDaysDuration * 0.2 * 86400000), y: chartUserWeight - 5 },
        { x: new Date(now.getTime() + chartDaysDuration * 0.35 * 86400000), y: chartUserWeight - 15 },
        { x: new Date(now.getTime() + chartDaysDuration * 0.6 * 86400000), y: chartUserWeight - 20 },
        { x: chartGoalDate, y: chartIdealWeight },
      ];

  const progressDataAfterGoal = isSmallDifference
    ? [
        { x: chartGoalDate, y: chartIdealWeight },
        { x: new Date(now.getTime() + chartDaysDuration * 0.8 * 86400000), y: chartUserWeight },
        { x: new Date(now.getTime() + chartDaysDuration * 1 * 86400000), y: chartUserWeight },
      ]
    : [
        { x: chartGoalDate, y: chartIdealWeight },
        { x: new Date(now.getTime() + chartDaysDuration * 0.8 * 86400000), y: chartUserWeight - 21 },
        { x: new Date(now.getTime() + chartDaysDuration * 1 * 86400000), y: chartUserWeight - 22 },
      ];

  const data = {
    datasets: [
      {
        label: "Weight Loss",
        data: progressDataBeforeGoal,
        borderColor: "#FF5C1D",
        backgroundColor: "rgba(255, 92, 29, 0.1)",
        fill: "start",
        tension: 0.4,
        pointRadius: [6, 0, 0, 0, 6],
        pointBackgroundColor: "#FF5C1D",
        borderWidth: 2,
      },
      {
        label: "Maintenance",
        data: progressDataAfterGoal,
        borderColor: "#249A50",
        backgroundColor: "rgba(36, 154, 80, 0.1)",
        fill: "start",
        tension: 0,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  // Date formatting
  const goalMonthShort = goalDate.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const formattedGoalDate = goalDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

  const options = {
    responsive: true,
    scales: {
      x: {
        type: "time",
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        min: now.getTime(),
        max: chartEndDate.getTime(),
        offset: true,
      },
      y: {
        display: false,
        grid: {
          display: false,
          drawBorder: false,
        },
        min: yMin,
        max: yMax,
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    layout: {
      padding: {
        right: 0,
      },
    },
    maintainAspectRatio: false,
  };

  const goalLabelPlugin = {
    id: "goalLabel",
    afterDatasetsDraw(chart) {
      const ctx = chart.ctx;
      const progressPoints = chart.getDatasetMeta(0).data;
      const goalPoint = progressPoints[5];
      const maintenancePoints = chart.getDatasetMeta(1).data;
      const maintenancePoint = maintenancePoints[1];

      // Initial weight label
      ctx.save();
      ctx.fillStyle = "#241063";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "left";
      ctx.fillText(`${realUserWeight} kg`, progressPoints[0].x + 8, progressPoints[0].y - 8);
      ctx.restore();

      // Goal label (only show if weight difference > 0)
      if (weightDifference > 0) {
        ctx.save();
        ctx.fillStyle = "#FF5C1D";
        ctx.beginPath();
        ctx.roundRect(goalPoint.x - 30, goalPoint.y - 40, 60, 30, 5);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Goal", goalPoint.x, goalPoint.y - 25);
        ctx.fillText(`${realIdealWeight} kg`, goalPoint.x, goalPoint.y - 12);
        ctx.restore();
      }

      // Maintain weight label
      ctx.save();
      ctx.fillStyle = "#249A50";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Maintain weight", maintenancePoint.x, maintenancePoint.y + 20);
      ctx.restore();
    },
  };

  return (
    <>
      {weightDifference > 0 ? (
        <>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#241063",
              fontWeight: 500,
              textAlign: "center",
            }}>
            You can reach your goal of
          </Typography>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#241063",
              fontWeight: 500,
              textAlign: "center",
              mb: 2,
            }}>
            <strong style={{ color: "#FF5C1D" }}>{realIdealWeight} kg</strong> by <strong>{formattedGoalDate}</strong>
          </Typography>
        </>
      ) : (
        <>
          <Typography
            sx={{
              fontSize: "22px",
              color: "#241063",
              fontWeight: 500,
              textAlign: "center",
            }}>
            You&apos;ve already reached your goal of
          </Typography>

          <Typography
            sx={{
              fontSize: "22px",
              color: "#241063",
              fontWeight: 500,
              textAlign: "center",
              mb: 2,
            }}>
            <strong style={{ color: "#FF5C1D" }}>{realIdealWeight} kg</strong>
          </Typography>
        </>
      )}

      <Box
        sx={{
          padding: "24px 16px",
          backgroundColor: "#fff",
          borderRadius: "12px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
        }}>
        <Box sx={{ height: "160px", position: "relative" }}>
          <Line data={data} options={options} plugins={[goalLabelPlugin]} />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: 1,
          }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#241063",
              fontWeight: 500,
              ml: 4,
            }}>
            NOW
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#241063",
              fontWeight: 500,
              mr: 4,
            }}>
            {goalMonthShort}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "12px",
          color: "#999",
          textAlign: "left",
          mt: 2,
          fontStyle: "italic",
        }}>
        This chart is for illustrative purposes only
      </Typography>
    </>
  );
};
