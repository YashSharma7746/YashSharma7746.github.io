import { Box, Heading, Image, Link } from '@chakra-ui/react'
import React from 'react'
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai'
import {BsLinkedin} from "react-icons/bs";
const Contact = () => {
  return (
    <Box id="contact">
      <Heading w={{base:"70%","2xl":"15%"}}  m="auto" borderBottom={"5px solid white"}>Contact</Heading>
      <Box display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",lg:"repeat(2,1fr)","2xl":"repeat(2,1fr)"}} justifyContent="space-between" w="80%" m="auto" mt="70px">
        <Box lineHeight={"50px"} textAlign="left">
          <Box fontSize={{base:"18px","2xl":"30px"}} mt="30px">
            <Link href="mailto:yash10072000@gmail.com" target="_blank" rel="noopener noreferrer" display={"flex"} alignItems="center"><AiOutlineMail style={{marginRight:"20px"}}/>yash10072000@gmail.com</Link>
          </Box>
          <Box fontSize={{base:"18px","2xl":"30px"}}  mt="30px">
            <Link href="https://github.com/YashSharma7746" target="_blank" rel="noopener noreferrer" display={"flex"} alignItems="center"><AiFillGithub style={{marginRight:"20px"}}/>github.com/YashSharma7746</Link>
          </Box>
          <Box fontSize={{base:"18px","2xl":"30px"}}  mt="30px">
            <Link href="https://linkedin.com/in/YashSharma7746" target="_blank" rel="noopener noreferrer" display={"flex"} alignItems="center"><BsLinkedin style={{marginRight:"20px"}}/>linkedin.com/in/YashSharma7746</Link>
          </Box>
        </Box >
        <Box display={"flex"} mt="30px" justifyContent={{base:"center","2xl":"right"}}>
          <Image src="https://assets.atlanticbt.com/content/uploads/2022/01/g_feature-web-development.png"/>
        </Box>
      </Box>
      <Box h="100px"></Box>
    </Box>
  )
}

export default Contact