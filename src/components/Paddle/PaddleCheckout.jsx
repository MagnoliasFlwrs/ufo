import { Typography, Button, Box, Card, CardContent, Avatar } from "@mui/material";
import { usePaddle } from "@/hooks/usePaddle";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarsIcon from "@mui/icons-material/Stars";

export const PaddleCheckout = () => {
  const PRICE_IDS = {
    MONTHLY: "pri_01jqf6227819yce54z6hdf0hcj",
    YEARLY: "pri_01jqf5zd53n6wn620w84kyaxm0",
  };

  const { openCheckout, isPaddleReady, error } = usePaddle();

  const handleOpenCheckout = (priceId) => {
    openCheckout(priceId, "magnolia.sav@gmail.com");
  };

  if (!isPaddleReady) {
    return (
      <div className='container'>
        <Box sx={{ textAlign: "center", py: 4 }}>
          <Typography variant='body1'>Payment system loading...</Typography>
        </Box>
      </div>
    );
  }

  if (error) {
    return (
      <div className='container'>
        <Box sx={{ color: "error.main", textAlign: "center", py: 2 }}>
          <Typography>{error}</Typography>
        </Box>
      </div>
    );
  }

  return (
    <div className='container'>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          py: 3,
        }}>
        <Typography
          variant='h5'
          align='center'
          sx={{
            color: "primary.main",
            fontWeight: 500,
            mb: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
          }}>
          <DiamondIcon color='primary' /> Choose Your Plan <DiamondIcon color='primary' />
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Monthly Subscription */}
          <Card
            elevation={3}
            sx={{
              border: "2px solid",
              borderColor: "primary.light",
              borderRadius: 2,
              "&:hover": {
                boxShadow: 6,
                borderColor: "primary.main",
              },
            }}>
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                  <StarsIcon />
                </Avatar>
                <Typography variant='h6' sx={{ fontWeight: 500 }}>
                  Monthly Plan
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                Full access to all features for one month
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography variant='h5' sx={{ fontWeight: 600 }}>
                  $1
                  <Typography component='span' variant='body2' color='text.secondary'>
                    /month
                  </Typography>
                </Typography>
                <Button
                  variant='contained'
                  onClick={() => handleOpenCheckout(PRICE_IDS.MONTHLY)}
                  sx={{
                    bgcolor: "primary.main",
                    "&:hover": { bgcolor: "primary.dark" },
                  }}>
                  Select
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Annual Subscription */}
          <Card
            elevation={4}
            sx={{
              border: "2px solid",
              borderColor: "secondary.light",
              borderRadius: 2,
              position: "relative",
              "&:hover": {
                boxShadow: 8,
                borderColor: "secondary.main",
              },
            }}>
            <Box
              sx={{
                position: "absolute",
                top: 5,
                right: 20,
                bgcolor: "secondary.main",
                color: "white",
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}>
              SAVE 20%
            </Box>

            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
                  <DiamondIcon />
                </Avatar>
                <Typography variant='h6' sx={{ fontWeight: 500 }}>
                  Annual Plan
                </Typography>
              </Box>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                Full access for one year + exclusive bonuses
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant='h5' sx={{ fontWeight: 600 }}>
                    $10
                    <Typography component='span' variant='body2' color='text.secondary'>
                      /year
                    </Typography>
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    (only $0.83/month)
                  </Typography>
                </Box>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={() => handleOpenCheckout(PRICE_IDS.YEARLY)}
                  sx={{
                    "&:hover": { bgcolor: "secondary.dark" },
                  }}>
                  Best Value
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>

        <Typography
          variant='caption'
          color='text.secondary'
          sx={{
            display: "block",
            mt: 2,
            textAlign: "center",
            fontStyle: "italic",
          }}>
          Subscription auto-renews. Cancel anytime.
        </Typography>
      </Box>
    </div>
  );
};
