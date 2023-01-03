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
    <Box>
      <Box display={{base:"none",sm:"none",md:"none",lg:"flex",xl:"flex","2xl":"flex"}} justifyContent={"space-between"}>
        <Box>
          {/*<Image src="" alt="logo"/>*/}
        </Box>
        <Box display={"flex"} mr="15px" gap="50px" p="20px" fontSize={"20px"}>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <AiOutlineHome style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/" >Home</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <AiOutlineUser style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/about">About</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <AiOutlineTool style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/skills">Skills</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <AiOutlineFundProjectionScreen style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/projects">Projects</Link>
          </Box>
          <Box className='link' display={"flex"} justifyContent="center" alignItems={"center"}>
            <PhoneIcon style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/contact">Contact</Link>
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