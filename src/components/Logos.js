import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../images/logoipsum-logo-1.svg";
import image2 from "../images/logoipsum-logo-3.svg";
import image3 from "../images/logoipsum-logo-5.svg";
import image4 from "../images/logoipsum-logo-6.svg";
import image5 from "../images/logoipsum-logo-7.svg";
import { Box } from "@mui/material";

export default function Logos() {
  return (
    <Box sx={{ position: "relative" }}>
      {/* Logo List container */}
      <ImageList
        sx={{
          mt: 0,
          px: { xs: "34px", md: "128px" },
          py: 5,
          width: "70%",
          backgroundColor: "#1B1B1B",
          left: { xs: "40px", md: "100px" },
          display: {
            xs: "grid",
            md: "flex ",
            lg: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            zIndex: "0",
            top: "0px",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 10,
          },
        }}
        cols={5}
        gap={10}
      >
        {/* Map through the itemData array */}
        {itemData.map((item, index) => (
          <ImageListItem
            key={item}
            sx={{
              gridColumn: index === -1 ? "span 3" : "span 2",
              gridRow: index < 2 ? "1" : index === 1 || index === 2 ? "3" : "2",
              alignItems: "center",
              ml: "50px",
            }}
          >
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading='lazy'
              style={{ maxWidth: "100%" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// Array of images to be displayed in the ImageList
const itemData = [image1, image2, image3, image4, image5];
