import { Typography, Button, Box, Card, CardContent, Avatar } from "@mui/material";
import { usePaddle } from "@/hooks/usePaddle";
import DiamondIcon from "@mui/icons-material/Diamond";
import StarsIcon from "@mui/icons-material/Stars";
import { useEffect, useRef } from "react";

export const PaddleCheckout = () => {
  const PRICE_IDS = {
    MONTHLY: "pri_01jqf6227819yce54z6hdf0hcj",
    YEARLY: "pri_01jqf5zd53n6wn620w84kyaxm0",
  };

  const { openInlineCheckout, isPaddleReady, error } = usePaddle();
  const checkoutRef = useRef(null);

  const handleOpenCheckout = (priceId) => {
    openInlineCheckout(priceId, "magnolia.sav@gmail.com");
    if (checkoutRef.current) {
      checkoutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // 🟢 Показываем сразу MONTHLY план при загрузке страницы
  useEffect(() => {
    if (!isPaddleReady) return;

    const waitAndInit = () => {
      const container = document.querySelector("#paddle-inline-container");

      if (container) {
        // 💥 Рендерим inline checkout именно в контейнер
        openInlineCheckout(PRICE_IDS.MONTHLY, "magnolia.sav@gmail.com");
      } else {
        // 🕐 Если контейнера ещё нет, ждём и повторяем
        setTimeout(waitAndInit, 100);
      }
    };

    waitAndInit();
  }, [isPaddleReady]);

  if (error) {
    return (
      <Box textAlign='center' color='error.main' py={2}>
        <Typography>{error}</Typography>
      </Box>
    );
  }

  return (
    <Box className='container'>
      <Typography
        variant='h5'
        align='center'
        mb={4}
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={1}
        color='primary.main'
        fontWeight={500}>
        <DiamondIcon /> Choose Your Plan <DiamondIcon />
      </Typography>

      <Box display='flex' flexDirection='column' gap={3}>
        {/* Monthly Plan */}
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
            <Box display='flex' alignItems='center' mb={2}>
              <Avatar sx={{ bgcolor: "primary.main", mr: 2 }}>
                <StarsIcon />
              </Avatar>
              <Typography variant='h6' fontWeight={500}>
                Monthly Plan
              </Typography>
            </Box>

            <Typography variant='body2' color='text.secondary' mb={2}>
              Full access to all features for one month
            </Typography>

            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography variant='h5' fontWeight={600}>
                $1
                <Typography component='span' variant='body2' color='text.secondary'>
                  /month
                </Typography>
              </Typography>
              <Button variant='contained' onClick={() => handleOpenCheckout(PRICE_IDS.MONTHLY)}>
                Select
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Annual Plan */}
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
            <Box display='flex' alignItems='center' mb={2}>
              <Avatar sx={{ bgcolor: "secondary.main", mr: 2 }}>
                <DiamondIcon />
              </Avatar>
              <Typography variant='h6' fontWeight={500}>
                Annual Plan
              </Typography>
            </Box>

            <Typography variant='body2' color='text.secondary' mb={2}>
              Full access for one year + exclusive bonuses
            </Typography>

            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Box>
                <Typography variant='h5' fontWeight={600}>
                  $10
                  <Typography component='span' variant='body2' color='text.secondary'>
                    /year
                  </Typography>
                </Typography>
                <Typography variant='caption' color='text.secondary'>
                  (only $0.83/month)
                </Typography>
              </Box>
              <Button variant='contained' color='secondary' onClick={() => handleOpenCheckout(PRICE_IDS.YEARLY)}>
                Best Value
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      <Typography variant='caption' color='text.secondary' textAlign='center' mt={2} fontStyle='italic'>
        Subscription auto-renews. Cancel anytime.
      </Typography>

      {/* Inline Checkout */}
      <Box
        id='paddle-inline-container'
        ref={checkoutRef}
        sx={{
          mt: 6,
          pt: 4,
          borderTop: "1px dashed #ccc",
          minHeight: "600px",
        }}
      />
    </Box>
  );
};
