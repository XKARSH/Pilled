import React from "react";
import { Typography, Box } from "@mui/material";
import arrow from "../images/long-arrow.svg";

export default function Component5() {
  return (
    <>
      <Typography
        sx={{
          color: "#72775B",
          fontFamily: "Poppins",
          fontSize: { xs: "13px", md: "14px" },
          mt: { xs: "80px", md: "200px" },
          ml: { xs: "14px", md: "160px" },
          display: { xs: "flex", md: "flex" },
        }}
      >
        ---- Our Collection
      </Typography>
      <Typography
        sx={{
          color: "#393842",
          fontWeight: "600",
          fontFamily: "Playfair Display",
          display: { xs: "flex", md: "flex" },
          fontSize: { xs: "36px", md: "70px" },
          lineHeight: { xs: "43px", md: "84px" },
          ml: { xs: "14px", md: "160px" },
          mt: "20px",
        }}
      >
        Everyone Needs <br />
        One Until They Do.
      </Typography>

      <Box
        display='grid'
        gridTemplateColumns='repeat(auto-fill,minmax(135px,1fr))!important'
      >
        <Box
          gridColumn='span 6'
          sx={{
            pt: "100px",
            pl: "152px",
            pr: "98px",
            pb: "4px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61hrOWjsx8L._AC_SL1500_.jpg'
            alt=''
            style={{
              width: "499px",
              height: "607px",
              borderRadius: "300px 300px 0px 0px",
              boxShadow: "17px 17px #72775B",
            }}
          />

          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              mt: "52px",
            }}
          >
            Maternity Foam Pillow
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              mt: "15px",
            }}
          >
            Discover more
            <img src={arrow} alt='' style={{ color: "#76747A" }} />
          </Typography>
        </Box>
        <Box
          gridColumn='span 5'
          sx={{
            pt: "100px",
            pl: "152px",
            pr: "134px",
            display: { xs: "none", md: "block" },
          }}
        >
          <img
            src='https://m.media-amazon.com/images/I/41BuMc8xU1L._AC_UF894,1000_QL80_FMwebp_.jpg'
            alt=''
            style={{
              width: "391px",
              height: "444px",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "17px 17px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              display: "flex",
              justifyContent: "right",
              mt: "22px",
            }}
          >
            Memory Foam Mattress
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              justifyContent: "right",
              mt: "15px",
            }}
          >
            Discover more
            <img src={arrow} alt='' style={{ color: "#76747A" }} />
          </Typography>
        </Box>

        <Box
          gridColumn='span 6'
          sx={{
            pt: "51px",
            pl: "88px",
            pr: "43px",
            pb: "30px",
            display: { xs: "block", md: "none" },
          }}
        >
          <img
            src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61hrOWjsx8L._AC_SL1500_.jpg'
            alt=''
            style={{
              width: "304px",
              height: "382px",
              borderRadius: "300px 300px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              display: "flex",
              mt: "26px",
              justifyContent: "center",
            }}
          >
            Maternity Foam Pillow
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              justifyContent: "center",
              mt: "15px",
            }}
          >
            Discover more
            <img src={arrow} alt='' style={{ color: "#76747A" }} />
          </Typography>
        </Box>
        <Box
          gridColumn='span 5'
          sx={{
            pt: "10px",
            pl: "88px",
            pr: "43px",
            display: { xs: "block", md: "none" },
          }}
        >
          <img
            src='https://m.media-amazon.com/images/I/41BuMc8xU1L._AC_UF894,1000_QL80_FMwebp_.jpg'
            alt=''
            style={{
              width: "302px",
              height: "364px",
              borderRadius: "240px 240px 0px 0px",
              boxShadow: "15px 15px #72775B",
            }}
          />
          <Typography
            sx={{
              color: "#393842",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "17px",
              display: "flex",
              justifyContent: "center",
              mt: "px",
            }}
          >
            Memory Foam Mattress
          </Typography>
          <Typography
            sx={{
              color: "#72775B",
              fontSize: "15px",
              fontFamily: "Poppins",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: "15px",
            }}
          >
            Discover more
            <img src={arrow} alt='' style={{ color: "#76747A" }} />
          </Typography>
        </Box>
      </Box>
    </>
  );
}
