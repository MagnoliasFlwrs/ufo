import { useState } from "react";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import WeightLossChart from "@components/SurveyComponents/Banners/WeightLossChart.jsx";
import CheckIcon from "@mui/icons-material/Check";

export const GoalBanner = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 16px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          marginBottom: "24px",
        }}>
        <Typography
          variant='h6'
          sx={{
            color: "#241063",
            fontSize: "14px",
            textAlign: "center",
            fontWeight: "500",
            lineHeight: "130%",
          }}>
          THE LAST EFFORT TO CHANGE LIFESTYLE YOU NEED
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "44px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px", alignItems: "center" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "12px",
              fontWeight: "500",
              lineHeight: "130%",
              textTransform: "uppercase",
              textAlign: "center",
            }}>
            We predict you’ll be
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "120%",
              textAlign: "center",
            }}>
            100 kg by 24 August
          </Typography>
        </Box>
        <WeightLossChart startDateUnix={1677657600} startWeight={90} endDateUnix={1696118400} targetWeight={70} />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
          <Typography
            variant='h6'
            sx={{
              color: "#FF5C1D",
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "130%",
            }}>
            Great news!
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: "#999",
              fontSize: "14px",
              fontWeight: "450",
              lineHeight: "130%",
              textAlign: "left",
            }}>
            Based on UFO users like you we predict you’ll be able to hit your weight loss goal by August 24.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px",
          border: "0.4px solid #DFDFDF",
          padding: "16px",
          marginBottom: "50px",
        }}>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll understand the reasons for your eating behavior
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll build harmonious relationships with yourself
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll build new healthy habits
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "8px" }}>
          <CheckIcon sx={{ color: "#241063" }} />
          <Typography
            variant='h6'
            sx={{
              color: "#241063",
              fontSize: "16px",
              fontWeight: "450",
              lineHeight: "120%",
              textAlign: "left",
            }}>
            You’ll feel better
          </Typography>
        </Box>
      </Box>
      <Button variant='contained' fullWidth onClick={handleClick} className='survey-next-button'>
        Next
      </Button>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message='All done! Thanks for completing the survey.'
      />
    </Box>
  );
};
