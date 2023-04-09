import React from "react";
import { Box, Typography } from "@mui/material";
import checkbox from "../images/check-square-regular.svg";

// Define an array of benefits
const benefits = [
  "Our amazing benefit",
  "One more amazing benefit",
  "Your benefit here",
  "Type more benefit",
];

export default function Benefits() {
  return (
    // Use CSS grid to create a two-column layout
    <Box
      display='grid'
      gridTemplateColumns='repeat(auto-fill,minmax(120px,1fr))!important'
    >
      {/* Left column */}
      <Box
        gridColumn='span 6'
        sx={{
          pl: 4,
          pr: 0,
          pb: "20px",
          mt: [0, 0, "310px"],
          ml: [0, 0, 17],
          display: { xs: "none", md: "flex" },
        }}
      >
        <img
          src='https://ii2.pepperfry.com/media/catalog/product/w/o/1600x1760/wolke-dual-comfort-6-inches-contour-hr-foam---pu-latex-queen-size-mattress-by-clouddio-wolke-dual-co-y2kadi.jpg'
          alt=''
          style={{
            width: "568px",
            height: "728px",
            borderRadius: "300px 300px 0px 0px",
            boxShadow: "17px 17px #72775B",
          }}
        />
      </Box>

      {/* Right column */}
      <Box gridColumn='span 6'>
        <Typography
          sx={{
            color: "#72775B",
            fontFamily: "Poppins",
            fontSize: { xs: "13px", md: "14px" },
            mt: { xs: "238px", md: "391px" },
            ml: { xs: "17px", md: "143px" },
            mr: "157px",
          }}
        >
          --- Why Should Buy
        </Typography>
        <Typography
          sx={{
            color: "#393842",
            fontWeight: "600",
            fontFamily: "Playfair Display",
            fontSize: { xs: "36px", md: "70px" },
            lineHeight: { xs: "43px", md: "84px" },
            ml: { xs: "17px", md: "143px" },
            mr: { xs: "94px", md: "157px" },
            mt: "20px",
          }}
        >
          Pillows As Sure As The Sun Shines.
        </Typography>
        <Typography
          sx={{
            color: "#00000099",
            fontFamily: "Poppins",
            fontSize: "15px",
            fontWeight: 600,
            lineHeight: "27px",
            ml: { xs: "17px", md: "144px" },
            mr: { xs: "107px", md: "325px" },
            mt: 4,
            mb: "48px",
          }}
        >
          In the summer of 2007 a man named Joe Safford decided he wanted to
          wear his new jeans national.
        </Typography>

        {/* Display a list of benefits using map()*/}
        {benefits.map((text) => (
          <Box
            key={text}
            sx={{
              display: "flex",
              ml: { xs: "17px", md: "144px" },
              mr: { xs: "149px", md: "326px" },
              mb: "10px",
            }}
          >
            <img src={checkbox} alt='' />
            <Typography
              sx={{
                color: "#747272",
                fontFamily: "Poppins",
                pl: "20px",
              }}
            >
              {text}
            </Typography>
          </Box>
        ))}
        <Box
          gridColumn='span 6'
          sx={{
            pt: "51px",
            pl: "88px",
            pr: "43px",
            pb: "30px",
            display: { xs: "flex", md: "none" },
          }}
        >
          <img
            src='https://ii2.pepperfry.com/media/catalog/product/w/o/1600x1760/wolke-dual-comfort-6-inches-contour-hr-foam---pu-latex-queen-size-mattress-by-clouddio-wolke-dual-co-y2kadi.jpg'
            alt=''
            style={{
              width: "272px",
              height: "340px",
              borderRadius: "300px 300px 0px 0px",
              boxShadow: "17px 17px #72775B",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
