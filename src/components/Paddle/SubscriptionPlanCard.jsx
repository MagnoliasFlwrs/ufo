import { Typography, Box, Card, CardContent } from "@mui/material";

export const SubscriptionPlanCard = ({ title, originalPrice, discountedPrice, pricePerDay, isSelected, onClick }) => {
  return (
    <Card
      elevation={0}
      onClick={onClick}
      sx={{
        height: "76px",
        backgroundColor: isSelected ? "#FFC9B5" : "#F5F5F5",
        border: isSelected ? "1px solid #FFC9B5" : "1px solid #E0E0E0",
        borderRadius: "8px",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          backgroundColor: "#FFC9B5",
          borderColor: "#FFC9B5",
        },
      }}>
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          p: "16px !important",
        }}>
        <Box>
          <Typography variant='h6' fontWeight={600} color='primary.main' align='left'>
            {title}
          </Typography>
          <Box display='flex' alignItems='baseline' gap={1}>
            <Typography variant='body2' sx={{ textDecoration: "line-through", color: "text.secondary" }}>
              {originalPrice}
            </Typography>
            <Typography variant='h6' fontWeight={700} color='primary.main'>
              {discountedPrice}
            </Typography>
          </Box>
        </Box>
        <Box textAlign='right'>
          <Typography variant='h6' fontWeight={700} color='primary.main' fontSize={28}>
            {pricePerDay}
          </Typography>
          <Typography variant='caption' color='primary.main' fontSize={14}>
            per day
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
