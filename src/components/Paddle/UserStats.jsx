// components/UserStats.tsx
import AppleIcon from "@mui/icons-material/Apple";
import { Typography, Box, Divider, Link } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const LeftIllustration = () => (
  <svg width='44' height='83' viewBox='0 0 44 83' fill='none'>
    <path
      d='M11.488 29.435C11.488 29.435 14.7345 25.2506 12.6349 19.4393C10.528 13.6316 5.62175 11.4258 5.62175 11.4258C5.62175 11.4258 1.95028 16.4127 4.0022 22.0738C6.05046 27.7385 11.488 29.435 11.488 29.435Z'
      fill='#5E5AA8'
    />
    <path
      d='M20.4981 32.3935C20.4981 32.3935 26.1738 31.9392 29.4239 26.8644C32.674 21.7932 30.1897 16.1211 30.1897 16.1211C30.1897 16.1211 24.9207 17.191 21.5826 22.3978C18.2483 27.6008 20.4981 32.3935 20.4981 32.3935Z'
      fill='#5E5AA8'
    />
    <path
      d='M21.0764 39.1049C18.4492 44.7 21.3035 49.163 21.3035 49.163C21.3035 49.163 26.8767 47.9685 29.4343 42.5199C31.9882 37.064 28.7857 31.7656 28.7857 31.7656C28.7857 31.7656 23.7036 33.5098 21.0764 39.1049Z'
      fill='#5E5AA8'
    />
    <path
      d='M33.9013 43.6094C33.9013 43.6094 29.0024 45.8298 26.9138 51.6412C24.8253 57.4635 28.0827 61.6333 28.0827 61.6333C28.0827 61.6333 33.5129 59.9221 35.5502 54.2537C37.5838 48.5853 33.9013 43.6094 33.9013 43.6094Z'
      fill='#5E5AA8'
    />
    <path
      d='M37.9855 74.2214C37.9855 74.2214 42.6976 71.0153 43.0163 65.0025C43.3315 58.9859 38.3665 55.2852 38.3665 55.2852C38.3665 55.2852 34.314 58.8211 33.9879 64.9915C33.6655 71.1582 37.9855 74.2214 37.9855 74.2214Z'
      fill='#5E5AA8'
    />
    <path
      d='M18.7223 18.2328C18.7223 18.2328 23.7458 16.5546 25.2188 10.5564C26.6954 4.55819 23.8411 0 23.8411 0C23.8411 0 18.0224 2.11055 16.5824 7.96218C15.1461 13.8102 18.7223 18.2328 18.7223 18.2328Z'
      fill='#5E5AA8'
    />
    <path
      d='M11.4856 42.1841C11.4856 42.1841 13.3507 37.2265 9.63158 32.2983C5.90514 27.3663 0.570153 26.7031 0.570153 26.7031C0.570153 26.7031 -1.46711 32.5511 2.16039 37.3584C5.78789 42.1695 11.4856 42.1841 11.4856 42.1841Z'
      fill='#5E5AA8'
    />
    <path
      d='M15.6452 55.2699C15.6452 55.2699 16.3597 50.0229 11.6403 46.0436C6.91356 42.0607 1.56391 42.603 1.56391 42.603C1.56391 42.603 0.87505 48.7587 5.47721 52.639C10.0867 56.5157 15.6452 55.2699 15.6452 55.2699Z'
      fill='#5E5AA8'
    />
    <path
      d='M21.9871 66.0835C21.9871 66.0835 21.0894 60.8657 15.3807 58.506C9.66826 56.139 4.73633 58.2752 4.73633 58.2752C4.73633 58.2752 5.9455 64.3503 11.5077 66.6587C17.0698 68.9561 21.9871 66.0835 21.9871 66.0835Z'
      fill='#5E5AA8'
    />
    <path
      d='M24.7588 70.5756C18.8082 68.9121 14.1621 71.6199 14.1621 71.6199C14.1621 71.6199 16.0858 77.5045 21.8825 79.1277C27.6865 80.7509 32.2227 77.3103 32.2227 77.3103C32.2227 77.3103 30.7094 72.2354 24.7588 70.5756Z'
      fill='#5E5AA8'
    />
    <path
      d='M19.3463 21.8164L16.7008 20.5156C16.5616 20.8051 2.95295 49.7115 41.1919 82.3993L43.1046 80.1605C6.69771 49.0336 18.8114 22.912 19.3463 21.8164Z'
      fill='#5E5AA8'
    />
  </svg>
);

const RightIllustration = () => (
  <svg width='43' height='82' viewBox='0 0 43 82' fill='none'>
    <path
      d='M31.2257 29.0713C31.2257 29.0713 28.0195 24.9387 30.093 19.1994C32.1738 13.4636 37.0193 11.2852 37.0193 11.2852C37.0193 11.2852 40.6453 16.2103 38.6188 21.8013C36.5959 27.3958 31.2257 29.0713 31.2257 29.0713Z'
      fill='#5E5AA8'
    />
    <path
      d='M22.3236 32.0045C22.3236 32.0045 16.7182 31.5558 13.5083 26.5438C10.2985 21.5354 12.752 15.9336 12.752 15.9336C12.752 15.9336 17.9558 16.9903 21.2525 22.1325C24.5455 27.2711 22.3236 32.0045 22.3236 32.0045Z'
      fill='#5E5AA8'
    />
    <path
      d='M21.7558 38.6273C24.3504 44.1531 21.5314 48.5607 21.5314 48.5607C21.5314 48.5607 16.0273 47.381 13.5014 42C10.9791 36.6116 14.1419 31.3789 14.1419 31.3789C14.1419 31.3789 19.1611 33.1014 21.7558 38.6273Z'
      fill='#5E5AA8'
    />
    <path
      d='M9.0923 43.0625C9.0923 43.0625 13.9306 45.2555 15.9933 50.9948C18.056 56.745 14.8389 60.8632 14.8389 60.8632C14.8389 60.8632 9.47589 59.1732 7.46386 53.575C5.45546 47.9768 9.0923 43.0625 9.0923 43.0625Z'
      fill='#5E5AA8'
    />
    <path
      d='M5.0584 73.3111C5.0584 73.3111 0.40468 70.1447 0.0898485 64.2063C-0.221364 58.2643 4.68205 54.6094 4.68205 54.6094C4.68205 54.6094 8.68439 58.1015 9.00646 64.1955C9.32491 70.2858 5.0584 73.3111 5.0584 73.3111Z'
      fill='#5E5AA8'
    />
    <path
      d='M24.0819 18.0069C24.0819 18.0069 19.1206 16.3495 17.6658 10.4256C16.2075 4.50173 19.0265 0 19.0265 0C19.0265 0 24.7731 2.0844 26.1952 7.86355C27.6138 13.6391 24.0819 18.0069 24.0819 18.0069Z'
      fill='#5E5AA8'
    />
    <path
      d='M31.227 41.6603C31.227 41.6603 29.385 36.7642 33.058 31.8969C36.7383 27.0261 42.0072 26.3711 42.0072 26.3711C42.0072 26.3711 44.0192 32.1466 40.4367 36.8944C36.8541 41.6459 31.227 41.6603 31.227 41.6603Z'
      fill='#5E5AA8'
    />
    <path
      d='M27.1137 54.5893C27.1137 54.5893 26.408 49.4072 31.069 45.4772C35.7371 41.5436 41.0205 42.0792 41.0205 42.0792C41.0205 42.0792 41.7009 48.1587 37.1557 51.991C32.6033 55.8196 27.1137 54.5893 27.1137 54.5893Z'
      fill='#5E5AA8'
    />
    <path
      d='M20.8555 65.2609C20.8555 65.2609 21.7421 60.1078 27.3801 57.7774C33.0217 55.4396 37.8926 57.5494 37.8926 57.5494C37.8926 57.5494 36.6984 63.5493 31.2051 65.8291C25.7119 68.098 20.8555 65.2609 20.8555 65.2609Z'
      fill='#5E5AA8'
    />
    <path
      d='M18.1146 69.6978C23.9915 68.0549 28.5801 70.7291 28.5801 70.7291C28.5801 70.7291 26.6802 76.5409 20.9554 78.144C15.2233 79.7471 10.7432 76.3491 10.7432 76.3491C10.7432 76.3491 12.2378 71.3371 18.1146 69.6978Z'
      fill='#5E5AA8'
    />
    <path
      d='M23.465 21.5503L26.0778 20.2656C26.2153 20.5515 39.6553 49.0999 1.89001 81.3827L0.00102425 79.1717C35.957 48.4304 23.9934 22.6323 23.465 21.5503Z'
      fill='#5E5AA8'
    />
  </svg>
);

export const UserStats = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F5",
        border: "0.4px solid #DFDFDF",
        borderRadius: "8px",
        mt: 3,
        overflow: "hidden",
      }}>
      <Box sx={{ p: 3, display: "flex", alignItems: "center" }}>
        <Box sx={{ mr: 2, flexShrink: 0 }}>
          <LeftIllustration />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='h4' fontWeight={700} color='primary.main' align='center'>
            15+ Million
          </Typography>
          <Typography variant='body1' color='text.primary' align='center' sx={{ mt: 1 }}>
            users started their weight
          </Typography>
          <Typography variant='body1' color='text.primary' align='center'>
            loss journey with us
          </Typography>
        </Box>

        <Box sx={{ ml: 2, flexShrink: 0 }}>
          <RightIllustration />
        </Box>
      </Box>

      <Divider sx={{ borderWidth: "2px", borderColor: "white", width: "90%", mx: "auto" }} />

      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box
            sx={{
              width: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Box>
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  sx={{
                    color: "#FFC107",
                    fontSize: "1.4rem",
                    mx: 0.3,
                  }}
                />
              ))}
            </Box>

            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography fontWeight={700} color='primary.main' sx={{ fontSize: "30px" }}>
                4.8
              </Typography>
              <Typography color='primary.main' sx={{ fontSize: "18px", mt: "12px" }}>
                out of 5
              </Typography>
            </Box>
          </Box>

          <Box sx={{ width: "50%" }}>
            <Link
              href='https://apps.apple.com'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                display: "flex",
                height: "70px",
                backgroundColor: "#000",
                borderRadius: "6px",
                overflow: "hidden",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}>
              <Box
                sx={{
                  width: "30%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <AppleIcon
                  sx={{
                    fontSize: "3rem",
                    color: "white",
                  }}
                />
              </Box>

              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.5,
                }}>
                <Typography
                  variant='caption'
                  sx={{
                    lineHeight: 1,
                    fontSize: "0.8rem",
                    color: "white",
                    letterSpacing: "0.5px",
                  }}>
                  Download on the
                </Typography>
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1,
                    fontSize: "1.4rem",
                    color: "white",
                    letterSpacing: "0.5px",
                  }}>
                  App Store
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>

        <Typography
          variant='h5'
          align='center'
          gutterBottom
          sx={{ color: "primary.main", fontSize: "26px", fontWeight: 700, mt: 3 }}>
          Over 351,000 5-star ratings from happy users
        </Typography>
      </Box>
    </Box>
  );
};
