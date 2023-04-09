import React from "react";
import { Box, Button, Typography } from "@mui/material";
import arrow from "../images/long-arrow.svg";
import Checkbox from "../images/check-square-regular.svg";

export default function Component2() {
  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(auto-fill,minmax(120px,1fr))!important'
    >
      {/* Left column */}
      <Box
        gridColumn='span 6'
        sx={{
          display: "flex",
          flexDirection: "column",
          px: { xs: "2%", md: "16%" },
        }}
      >
        <Typography
          variant='body2'
          sx={{
            color: "#D9D4D4CC",
            fontFamily: "Poppins",
            mt: { xs: "216px", md: "283px" },
            lineHeight: 1.8,
          }}
        >
          That's where we come in - the folks at Oliya, with our Kickstarter
          campaign goal of $1000 for a total books and one final book time
        </Typography>
        <Box sx={{ display: "flex", mt: { xs: "40px", md: "50px" } }}>
          <img src={Checkbox} alt='' style={{ color: "#747272" }} />
          <Typography
            sx={{
              color: "#D9D4D4CC",
              fontFamily: "Poppins",
              px: "20px",

              fontSize: "15px",
            }}
          >
            Free Delivery
          </Typography>
          <img src={Checkbox} alt='' style={{ color: "#747272" }} />

          <Typography
            sx={{
              color: "#D9D4D4CC",
              fontFamily: "Poppins",
              px: "20px",

              fontSize: "15px",
            }}
          >
            24/7 Support
          </Typography>
          <img src={Checkbox} alt='' style={{ color: "#747272" }} />

          <Typography
            sx={{
              color: "#D9D4D4CC",
              fontFamily: "Poppins",
              pl: "20px",

              fontSize: "15px",
            }}
          >
            Free Return
          </Typography>
        </Box>
        <Box
          sx={{
            pl: { xs: "120px", md: "0px" },
            mt: "40px",
            display: { xs: "flex", md: "flex" },
          }}
        >
          <Button
            variant='contained'
            sx={{
              backgroundColor: "#72775B",
              color: "#D9D4D4",
              fontSize: "15px",
              fontFamily: "Poppins",
              py: "16px",
              px: "26px",
            }}
          >
            Get Started
            <img src={arrow} alt='' style={{ marginLeft: "30px" }} />
          </Button>
        </Box>
      </Box>

      {/* Right column */}
      {/* For Screen Sizes Bigger than Mobile */}
      <Box
        gridColumn='span 6'
        sx={{
          px: { xs: 1, md: 25 },
          mt: { xs: "50px", md: "273px" },
          objectFit: "cover",
        }}
      >
        <img
          src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61hrOWjsx8L._AC_SL1500_.jpg'
          alt=''
          style={{ width: "460px", height: "550px" }}
        />
        <Box
          sx={{
            backgroundColor: "#E1DDDD",
            pt: "26px",
            pl: "30px",
            pr: "43px",
            pb: "20px",
            ml: { xs: "25px", md: "32px" },
            maxWidth: { xs: "70%", md: "20%" },
            display: { xs: "none", md: "flex" }, //For Medium Screen Sizes
            flexDirection: "column",
            position: "absolute",
            zIndex: "0",
            top: "1240px",
            left: "697px",
          }}
        >
          <Typography
            sx={{
              color: "#000000CC",
              fontFamily: "Poppins",
              fontSize: "16px",
              lineHeight: 1.5,
              mt: 0.3,
              ml: 0.5,
              mr: -1,
            }}
          >
            "Definitely worth the investment. Really good. Keep up the excellent
            work. It's really wonderful."
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "15px",
              mt: 5,
              ml: 0.5,
              mr: -2,
            }}
          >
            Jena Redmond
          </Typography>
          <Typography
            sx={{
              color: "#00000066",
              fontFamily: "Poppins",
              fontSize: "15px",
              fontWeight: 600,
              mt: 1,
              ml: 0.5,
              mr: -2,
            }}
          >
            Designer
          </Typography>
        </Box>

        {/* For Mobile Devices */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" }, //For Mobile Screen Sizes
            flexDirection: "column",
            zIndex: 1,
            mb: "113px",
          }}
        >
          <Typography
            sx={{
              color: "#000000CC",
              backgroundColor: "#E1DDDD",
              fontFamily: "Poppins",
              fontSize: "14px",
              width: "306px",
              height: "198px",
              lineHeight: "25px",
              zIndex: 1,
              mt: -25,
              pt: "26px",
              pb: "30px",
              px: "30px",
              ml: "40px",
              mr: -1,
            }}
          >
            Definitely worth the investment. Really good. Keep up the excellent
            work. It's really wonderful.
          </Typography>
          <Typography
            sx={{
              color: "000000CC",
              backgroundColor: "#E1DDDD",
              zIndex: 1,
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "12px",
              mt: -16,
              ml: "65px",
              mr: "70px",
              mb: "20px",
            }}
          >
            Jena Redmond
          </Typography>
          <Typography
            sx={{
              color: "#00000066",
              backgroundColor: "#E1DDDD",
              zIndex: 1,
              mt: -1,
              ml: "65px",
              mr: "70px",
              fontFamily: "Poppins",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            Designer
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
