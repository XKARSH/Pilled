import React from "react";
import { Box, Typography } from "@mui/material";
import icon1 from "../images/icon1.svg";
import icon2 from "../images/icon2.svg";
import icon3 from "../images/icon3.svg";
import icon4 from "../images/icon4.svg";
import icon5 from "../images/icon5.svg";
import icon6 from "../images/icon6.svg";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
const texts = [
  "Soft Material",
  "Safe For Animal",
  "Comfortable Texture",
  "Happy Power",
  "Good Quality",
  "No Dusty",
];
export default function Qualities() {
  return (
    <Box
      display='flex'
      backgroundcolor='#E1DDDD'
      flexDirection='column'
      flexWrap='wrap'
      alignItems='left'
    >
      {/* Heading */}
      <Typography
        sx={{
          color: "#393842",
          fontWeight: "600",
          fontFamily: "Playfair Display",
          fontSize: { xs: "36px", md: "70px" },
          lineHeight: { xs: "43px", md: "84px" },
          width: { xs: "324px", md: "638px" },
          mt: { xs: "80px", md: "200px" },
          ml: { xs: "81px", md: "477px" },
          textAlign: { xs: "center", md: "center" },
        }}
      >
        Everyone Needs <br />
        One Until They Do.
      </Typography>

      <Box flexDirection={{ xs: "row", md: "column" }}>
        <Box
          display={{ xs: "block", md: "flex" }}
          justifyContent={{ xs: "center", md: "center" }}
          mt={{ xs: "42px", md: "100px" }}
          mb={{ xs: "20px", md: "0px" }}
          ml={{ xs: "44px" }}
        >
          {icons.slice(0, 3).map((icon, index) => (
            <Box
              key={index}
              width={380}
              height={259}
              mr={2}
              mb={{ xs: "20px" }}
              display='flex'
              padding='8px'
              style={{ border: "1px solid #707070" }}
            >
              <Box textAlign='center'>
                <img src={icon} alt='' style={{ marginTop: "50px" }} />
                <Typography
                  color='#393842'
                  fontFamily='Poppins'
                  fontSize='20px'
                  mt='16px'
                  mx={10}
                  justifyContent='center'
                  textAlign='center'
                >
                  {texts[index + 0]}
                </Typography>
                <Typography
                  color='#72775BCC'
                  mt='18px'
                  mx='48px'
                  mb='39px'
                  fontSize='14px'
                  textAlign='center'
                  justifyContent='center'
                >
                  The versatile space makes it easy to keep a fresh supply of
                  ingredients
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          display={{ xs: "block", md: "flex" }}
          justifyContent='center'
          mt={{ xs: "0px", md: "10px" }}
          ml={{ xs: "44px" }}
        >
          {icons.slice(3, 6).map((icon, index) => (
            <Box
              key={index}
              width={380}
              height={259}
              mr={2}
              mb={{ xs: "20px" }}
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              padding='8px'
              style={{ border: "1px solid #707070" }}
            >
              <Box textAlign='center'>
                <img src={icon} alt='' style={{ marginTop: "50px" }} />
                <Typography
                  color='#393842'
                  fontFamily='Poppins'
                  fontSize='20px'
                  mt='16px'
                  mx={10}
                  justifyContent='center'
                  textAlign='center'
                >
                  {texts[index + 3]}
                </Typography>
                <Typography
                  color='#72775BCC'
                  mt='18px'
                  mx='48px'
                  mb='39px'
                  fontSize='14px'
                  textAlign='center'
                  justifyContent='center'
                >
                  The versatile space makes it easy to keep a fresh supply of
                  ingredients
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
