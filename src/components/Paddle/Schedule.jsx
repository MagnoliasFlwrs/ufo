import { Box, Typography } from "@mui/material";
import { useUserStore } from "@/store/store";
import { StraightScheduleSvg } from "./StraightScheduleSvg";
import { ScheduleSvg } from "./ScheduleSvg";
import { calculateGoalDate, convertWeight, getDisplayWeight, isSmallWeightDifference } from "@/utils/weightUtils";

export const Schedule = () => {
  const measurementSystem = useUserStore((state) => state.measurementSystem);
  const realUserWeight = Number(useUserStore((state) => state.weight));
  const realIdealWeight = Number(useUserStore((state) => state.idealWeight));

  if (isNaN(realUserWeight) || isNaN(realIdealWeight)) return null;

  const weightDifference = Math.abs(realUserWeight - realIdealWeight);
  const isSmallDifference = isSmallWeightDifference(realUserWeight, realIdealWeight);

  const goalDate = calculateGoalDate(realUserWeight, realIdealWeight);
  const formattedGoalDate = goalDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });

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
              textAlign: "center",
              fontFamily: "Inter",
              fontWeight: 700,
            }}>
            <span style={{ color: "#FF5C1D" }}>{getDisplayWeight(realIdealWeight, measurementSystem)} by</span>{" "}
            <span>{formattedGoalDate}</span>
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
            <strong style={{ color: "#FF5C1D" }}>{getDisplayWeight(realIdealWeight, measurementSystem)}</strong>
          </Typography>
        </>
      )}

      <Box
        sx={{
          padding: "24px 16px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          height: "100%",
          mt: 3,
        }}>
        {isSmallDifference ? (
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <StraightScheduleSvg />
            </div>
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: "10px",
                color: "#241063",
                fontSize: window.innerWidth <= 445 ? "14px" : "16px",
                fontWeight: "bold",
              }}>
              {convertWeight(realUserWeight, measurementSystem)} {measurementSystem === "imperial" ? "lbs" : "kg"}
            </div>

            {measurementSystem === "imperial" ? (
              <div
                style={{
                  position: "absolute",
                  top: measurementSystem === "imperial" ? "9%" : "15%",
                  left: window.innerWidth <= 445 ? "52%" : "53%",
                  color: "#FFFFFF",
                  fontSize: window.innerWidth <= 445 ? "14px" : "16px",
                  fontWeight: "500",
                }}>
                Goal <br />
                {convertWeight(realIdealWeight, measurementSystem)}
                <br />
                {"lbs"}
              </div>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: measurementSystem === "imperial" ? "9%" : "15%",
                  left: "52%",
                  color: "#FFFFFF",
                  fontSize: window.innerWidth <= 445 ? "14px" : "16px",
                  fontWeight: "500",
                }}>
                Goal <br />
                {convertWeight(realIdealWeight, measurementSystem)} {"kg"}
              </div>
            )}
          </Box>
        ) : (
          <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
            <div style={{ width: "100%", height: "100%" }}>
              <ScheduleSvg />
            </div>
            <div
              style={{
                position: "absolute",
                top: "-5px",
                left: "20px",
                color: "#241063",
                fontSize: window.innerWidth <= 445 ? "14px" : "16px",
                fontWeight: "500",
              }}>
              {convertWeight(realUserWeight, measurementSystem)} {measurementSystem === "imperial" ? "lbs" : "kg"}
            </div>

            {measurementSystem === "imperial" ? (
              <div
                style={{
                  position: "absolute",
                  top: "29%",
                  left: "54%",
                  color: "#FFFFFF",
                  fontSize: window.innerWidth <= 445 ? "12px" : "16px",
                  fontWeight: "500",
                }}>
                Goal <br />
                {convertWeight(realIdealWeight, measurementSystem)}
                <br />
                {"lbs"}
              </div>
            ) : (
              <div
                style={{
                  position: "absolute",
                  top: "32%",
                  left: "54%",
                  color: "#FFFFFF",
                  fontSize: window.innerWidth <= 445 ? "12px" : "16px",
                  fontWeight: "500",
                }}>
                Goal <br />
                {convertWeight(realIdealWeight, measurementSystem)} {"kg"}
              </div>
            )}
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            mt: 1,
          }}>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#241063",
              fontWeight: 500,
              ml: 3,
            }}>
            NOW
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "#241063",
              fontWeight: 500,
              mr: 2,
            }}>
            {goalDate.toLocaleString("en-US", { month: "short" }).toUpperCase()}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "16px",
          color: "#999",
          textAlign: "left",
          mt: 2,
        }}>
        This chart is for illustrative purposes only
      </Typography>
    </>
  );
};
