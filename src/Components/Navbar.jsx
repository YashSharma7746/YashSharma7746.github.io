import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineTool, AiOutlineUser} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {PhoneIcon} from "@chakra-ui/icons";
import "./navbar.css"
import Menuu from './Menu';
const Navbar = () => {
  return (
    <Box position="sticky" top="0" w="100%" zIndex={"1000"} p="20px 20px 0px 0px" backgroundColor="#0A0416" filter="blur" h="5rem">
      <Box display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}}  top="0" justifyContent={"space-between"}>
        <Box>
          {/*<Image src="" alt="logo"/>*/}
        </Box>
        <Box display={"flex"} mr="15px" gap="50px" fontSize={"20px"}>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="/" style={{display:"flex",alignItems:"center"}}>
            <AiOutlineHome style={{marginBottom:"2px",marginRight:"10px"}}/>Home</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="/about" style={{display:"flex",alignItems:"center"}}>
            <AiOutlineUser style={{marginRight:"10px"}}/>About</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="/skills" style={{display:"flex",alignItems:"center"}}>
            <AiOutlineTool style={{marginRight:"10px"}}/>Skills</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
          <Link to="/projects" style={{display:"flex",alignItems:"center"}}>
            <AiOutlineFundProjectionScreen style={{marginBottom:"2px",marginRight:"10px"}}/>Projects</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            
          <Link to="/contact" style={{display:"flex",alignItems:"center"}}>
            <PhoneIcon style={{marginBottom:"2px",marginRight:"10px"}}/>Contact</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <CgFileDocument style={{marginBottom:"2px",marginRight:"10px"}}/>
            <a href="https://drive.google.com/file/d/1-27JqVP743yK-A3ZE3CvIRpF32OzsQfL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
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