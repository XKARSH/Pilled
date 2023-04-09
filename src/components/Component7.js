import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import arrow from "../images/long-arrow.svg";
import bgimage from "../images/wave.svg";
import mapMarker from "../images/map-marker.svg";
import emailIcon from "../images/envelope-solid.svg";
import phoneIcon from "../images/phone-solid.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";
import LinkedIn from "../images/LinkedIn.svg";

export default function Component7() {
  return (
    <Box
      display='flex'
      sx={{
        display: "flex",
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "100%",
        height: { xs: "1347px", md: "1107px" },
        flexDirection: "column",
        alignItems: "center",
        pr: { xs: "10px" },
      }}
    >
      <Typography
        sx={{
          color: "#393842",
          fontFamily: "Playfair Display",
          fontWeight: "600",
          display: { xs: "flex", md: "flex" },
          fontSize: { xs: "36px", md: "70px" },
          lineHeight: { xs: "43px", md: "84px" },
          width: { xs: "324px", md: "638px" },
          mr: { xs: "81px", md: "364px" },
          mt: { xs: "60px", md: "200px" },
          ml: { xs: "81px", md: "438px" },
          flexDirection: "column",
          alignItems: "center",
          textAlign: { xs: "center", md: "center" },
        }}
      >
        You Deserve
        <br />
        Pillows Today.
      </Typography>
      <Button
        variant='contained'
        sx={{
          backgroundColor: "#72775B",
          color: "#D9D4D4",
          fontSize: "15px",
          fontFamily: "Poppins",
          width: "346px",
          height: "64px",
          mt: "35px",
          py: "21px",
          px: "10px",
          mb: { xs: "60px", md: "200px" },
        }}
      >
        Get Started Now
        <img src={arrow} alt='' style={{ marginLeft: "73px" }} />
      </Button>
      <Box
        display={{ xs: "flex", md: "flex" }}
        backgroundcolor='#E1DDDD'
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          top: "3890px",
          left: { xs: "346px", md: "134px" },
          width: { xs: "346px", md: "1252px" },
          height: { xs: "907px", md: "300px" },
          mb: { xs: "907px", md: "140px" },
        }}
      >
        <Box
          sx={{
            width: { xs: "346px", md: "25%" },
            height: { xs: "208px", md: "300px" },
            backgroundColor: "#E1DDDD",
          }}
        >
          <Typography
            color='#393842'
            fontFamily='Playfair Display'
            fontSize='28px'
            width={{ xs: "346px", md: "200px" }}
            mr={{ xs: "0px", md: "100px" }}
            justifyContent='center'
            lineHeight='58px'
          >
            Pilled.
          </Typography>
          <Typography
            color='#72775B'
            width={{ xs: "346px", md: "200px" }}
            mt={{ xs: "22px", md: "34px" }}
            mr={{ xs: "100px", md: "50px" }}
            fontSize='16px'
            textAlign='left'
            justifyContent='center'
            lineHeight='26px'
          >
            In the summer of 2007 a man named Joe Safford decided he wanted to
            wear his new jeans national.
          </Typography>
          <Typography
            color='##000000'
            position='absolute'
            mt={{ xs: "801px", md: "50px" }}
            width={{ xs: "346px", md: "200px" }}
            mr='100px'
            fontSize='14px'
            alignItems='center'
            justifyContent='center'
            zIndex={1}
          >
            Copyright © 2023 pilled.
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "346px", md: "25%" },
            height: { xs: "384px", md: "300px" },
            backgroundColor: "#E1DDDD",
            ml: { md: "1%" },
          }}
        >
          <Typography
            color='#393842'
            fontFamily='Playfair Display'
            fontSize='28px'
            mr='100px'
            lineHeight='58px'
          >
            Get In Touch
          </Typography>
          <Typography
            color='#72775B'
            display='flex'
            fontSize='15px'
            lineHeight='32px'
            fontFamily='Poppins'
            justifyContent='space-between'
            mt={{ xs: "22px", md: "36px" }}
            mr={{ xs: "110px", md: "75px" }}
          >
            <img src={mapMarker} alt='' style={{ marginRight: "20px" }} />
            8819 Ohio St. South Gate, Ca 90280
          </Typography>
          <Typography
            color='#72775B'
            display='flex'
            fontSize='15px'
            lineHeight='32px'
            fontFamily='Poppins'
            mt={{ xs: "20px", md: "30px" }}
            mr={{ xs: "170px", md: "120px" }}
          >
            <img src={emailIcon} alt='' style={{ marginRight: "20px" }} />
            email@lavino.com
          </Typography>
          <Typography
            color='#72775B'
            display='flex'
            fontSize='15px'
            lineHeight='32px'
            fontFamily='Poppins'
            mt={{ xs: "20px", md: "30px" }}
            mr={{ xs: "172px", md: "142px" }}
          >
            <img src={phoneIcon} alt='' style={{ marginRight: "20px" }} />
            (205) 555-0100
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "346px", md: "25%" },
            height: { xs: "232px", md: "212px" },
            backgroundColor: "#E1DDDD",
            ml: { md: "1%" },
          }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", lineHeight: "27px" }}
          >
            <img
              src={Facebook}
              alt='Facebook'
              style={{ marginRight: "30px" }}
            />
            <img
              src={Instagram}
              alt='Instagram'
              style={{ marginRight: "30px" }}
            />
            <img src={Twitter} alt='Twitter' style={{ marginRight: "30px" }} />
            <img src={LinkedIn} alt='LinkedIn' />
          </Typography>
          <Typography
            color='#72775B'
            mt='36px'
            mr='50px'
            fontSize='14px'
            textAlign='left'
            lineHeight='26px'
          >
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do
            eiusmod.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "243px", md: "25%" },
            height: { xs: "343px", md: "300px" },
            backgroundColor: "#E1DDDD",
            ml: { md: "1%" },
          }}
        >
          <Typography
            color='#393842'
            fontFamily='Playfair Display'
            fontSize={{ xs: "22px", md: "28px" }}
            mr='0px'
            lineHeight='58px'
          >
            Subscribe Newsletter
          </Typography>
          <Box display='flex' flexDirection='column' mt='20px'>
            <Typography
              color='#00000099'
              fontFamily='Poppins'
              fontSize={{ xs: "16px", md: "20px" }}
              mt='19px'
              textAlign='left'
            >
              Your Email
            </Typography>
            <TextField
              variant='outlined'
              placeholder='Enter your email'
              style={{ border: "1px solid #B6B6B6" }}
              sx={{
                width: "290px",
                mt: "18px",
              }}
            />
            <Button
              variant='contained'
              sx={{
                backgroundColor: "#72775B",
                color: "#D9D4D4",
                width: "293px",
                fontSize: "16px",
                fontFamily: "Poppins",
                py: "16px",
                px: "26px",
                mt: "20px",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
