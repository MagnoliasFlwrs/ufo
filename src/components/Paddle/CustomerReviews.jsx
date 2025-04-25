import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      author: "Roger W.",
      title: "Love your cool content!",
      content:
        "The content is addictive! I open the app every morning just to see what's new. It's like a wellness magazine in my pocket.",
      rating: 5,
    },
    {
      id: 2,
      author: "Brett S.",
      title: "Lost 12 lbs in 5 weeks — and I still crave the healthy recipes",
      content:
        "I've tried so many apps, but this one nailed it. The recipes are quick, delicious, and totally satisfying. I'm eating better than ever — and the weight just melted off.",
      rating: 5,
    },
    {
      id: 3,
      author: "Greg H.",
      title: "Action plan helped me drop 18 lbs!",
      content:
        "The structured activity plan keeps me going every single day. No guesswork, just fun and progress. I used to hate exercise — now I look forward to it.",
      rating: 4,
    },
    {
      id: 4,
      author: "Tiffany F.",
      title: "22 lbs lighter in under 3 months — obsessed with the meal plans",
      content:
        "Every week brings new meals I can't wait to try. Grocery shopping is easy, cooking is fun, and I never feel deprived. This app completely changed my relationship with food.",
      rating: 5,
    },
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", mt: 5 }}>
      <Typography
        variant='h5'
        sx={{
          color: "primary.main",
          fontSize: "26px",
          fontWeight: 700,
          mb: 4,
          textAlign: "left",
        }}>
        Customers reviews
      </Typography>

      {reviews.map((review) => (
        <Box
          key={review.id}
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: "#F5F5F5",
            border: "1px solid #E1E1E1",
            borderRadius: "8px",
          }}>
          {/* Рейтинг и имя в одной строке */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 1,
              gap: 1,
            }}>
            {/* Рейтинг со звездами */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  sx={{
                    color: i < review.rating ? "#FFC107" : "#E0E0E0",
                    fontSize: "20px",
                    mr: 0.5,
                  }}
                />
              ))}
            </Box>

            {/* Имя автора */}
            <Typography
              variant='body1'
              sx={{
                fontWeight: 500,
                color: "primary.main",
                fontSize: "14px",
                mt: 0.25,
              }}>
              {review.author}
            </Typography>
          </Box>

          {/* Заголовок отзыва */}
          <Typography
            align='left'
            color='primary.main'
            sx={{
              fontWeight: 700,
              fontSize: "16px",
            }}>
            {review.title}
          </Typography>

          {/* Текст отзыва */}
          <Typography
            align='left'
            color='primary.main'
            mt={1}
            sx={{
              fontSize: "16px",
              lineHeight: "20px",
            }}>
            {review.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
