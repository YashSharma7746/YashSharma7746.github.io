import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-scroll';
import {AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineTool, AiOutlineUser} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {PhoneIcon} from "@chakra-ui/icons";
import logo from "../Assets/logo.png";
import "./navbar.css"
import Menuu from './Menu';
const Navbar = () => {
  return (
    <Box id="nav-menu" position="sticky" top="0" w="100%" zIndex={"1000"} p="20px 20px 0px 0px" backgroundColor="#0A0416" filter="blur" h={{base:"none","2xl":"5.7rem"}}>
      <Box display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}}  top="0" justifyContent={"space-between"}>
        <Box>
          <Link to="home" className='nav-link home'>
          <Image w="70px" src={logo} alt="logo"/>
          </Link>
        </Box>
        <Box display={"flex"} mr="15px" gap="50px" fontSize={"20px"}>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="home" className='nav-link home' spy={true} smooth={true} duration={500} activeClass='active' style={{display:"flex",alignItems:"center"}}>
            <AiOutlineHome style={{marginBottom:"2px",marginRight:"10px"}}/>Home</Link>
          </Box>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="about" activeClass="active" className='nav-link about' spy={true} smooth={true} duration={500} style={{display:"flex",alignItems:"center"}}>
            <AiOutlineUser style={{marginRight:"10px"}}/>About</Link>
          </Box>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="skills" className='nav-link skills' activeClass="active" spy={true} smooth={true} duration={500}  style={{display:"flex",alignItems:"center"}}>
            <AiOutlineTool style={{marginRight:"10px"}}/>Skills</Link>
          </Box>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="projects" className='nav-link projects' activeClass="active" spy={true} smooth={true} duration={500}  style={{display:"flex",alignItems:"center"}}>
            <AiOutlineFundProjectionScreen style={{marginBottom:"2px",marginRight:"10px"}}/>Projects</Link>
          </Box>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
            
          <Link to="contact" className='nav-link contact' activeClass="active" spy={true} smooth={true} duration={500}  style={{display:"flex",alignItems:"center"}}>
            <PhoneIcon style={{marginBottom:"2px",marginRight:"10px"}}/>Contact</Link>
          </Box>
          <Box className='link' cursor={"pointer"} display={"flex"} justifyContent="center" alignItems={"center"}>
            <CgFileDocument style={{marginBottom:"2px",marginRight:"10px"}}/>
            <a className='nav-link resume' id="resume-button-1" href="https://drive.google.com/file/d/1-27JqVP743yK-A3ZE3CvIRpF32OzsQfL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Box>
        </Box>
      </Box>
      <Menuu />
      <Box>
      </Box>
    </Box>
  )
}

export default Navbar