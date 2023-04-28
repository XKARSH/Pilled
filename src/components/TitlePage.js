import React from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import playButton from "../images/play-button.svg";

export default function TitlePage() {
  //Using useMediaQuery Hook for determining the screen size
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 600px)");

  // Set the number of columns and gap size based on screen size
  const cols = isMobile ? 2 : isTablet ? 2 : 4;
  const gap = isMobile ? 5 : isTablet ? 1 : 9;
  return (
    <Box
      sx={{
        marginTop: { xs: "34px", md: "110px" },
        position: "relative",
        mt: 12,
      }}
    >
      <ImageList
        // Set padding, margin and justify content based on screen size
        sx={{
          px: { xs: "2%", md: "9%" },
          margin: "0 auto",
          justifyContent: "center",
        }}
        cols={cols}
        gap={gap}
      >
        {/* Loop through the item data and create ImageListItems using map()  */}
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // Set the image source and dimensions based on screen size
              src={`${item.img}?w=281&h=394&fit=crop&auto=format`}
              srcSet={`${item.img}?w=281&h=394&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
              style={{
                height: isMobile ? "237px" : isTablet ? "330px" : "420px",
                width: isMobile ? "223px" : isTablet ? "242px" : "295px",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      {/* Title */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            zIndex: 2,
            display: "flex",
            fontWeight: 700,
            width: { xs: "342px", md: "762px" },
            height: { xs: "93px", md: "203px" },
            color: "#D9D4D4",
            justifyContent: "center",
            fontSize: { xs: "37px", md: "80px" },
            fontFamily: "Playfair Display",
            mt: { xs: "110px", md: "-50px" },
            ml: { xs: "17px", md: "145px" },
            mr: { xs: "117px" },
            lineHeight: { xs: "44px", md: "96px" },
          }}
        >
          We Bring The Good <br />
          Pillows To Life.
        </Typography>
      </Box>
      {/* Add a small text box to indicate a video */}
      <Typography
        sx={{
          zIndex: 0,
          position: "absolute",
          backgroundColor: "#72775B",
          color: "#D9D4D4",
          fontSize: "12px",
          display: { sm: "flex", md: "none", lg: "flex" },
          fontWeight: "bold",
          textAlign: "center",
          alignItems: "center",
          mt: { xs: "0px", md: "-40px" },
          ml: { xs: "15px", md: "510px" },
          mr: { xs: "-10px", md: "170px" },
          pr: { xs: "270px", md: "79px" },
          py: "35px",
          pl: { xs: "117px", md: "423px" },
        }}
      >
        30S VIDEO
      </Typography>
      <Typography
        sx={{
          display: "flex",
          position: "absolute",
          zIndex: 2,
          ml: { xs: "227px", md: "1035px" },
          mt: { xs: "10px", md: "-28px" },
          mr: { xs: "270px", md: "110px" },
        }}
      >
        <img src={playButton} alt='' />
      </Typography>
    </Box>
  );
}

const itemData = [
  {
    img: "https://ii2.pepperfry.com/media/catalog/product/p/r/1600x1760/proactiv-jump-6-inches-queen-size-bonnell-spring---hr-foam-mattress-by-springfit-proactiv-jump-6-inc-q4y8t2.jpg",
    title: "Pillow1",
  },
  {
    img: "https://m.media-amazon.com/images/I/61pmSVY95dS._SL1500_.jpg",
    title: "Pillow2",
  },
  {
    img: "https://m.media-amazon.com/images/I/61xn5nEUN1L._SL1500_.jpg",
    title: "Pillow3",
  },
  {
    img: "https://m.media-amazon.com/images/I/61Gx4kIouUL._SX679_.jpg",
    title: "Pillow4",
  },
];
