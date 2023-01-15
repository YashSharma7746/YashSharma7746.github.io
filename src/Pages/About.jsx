import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <>
    <Box  backgroundColor={"#14082b"} p="60px 0px 80px 0px" id="about">
    <Box h="70px"></Box>
    <Heading borderBottom={"5px solid white"} w="15%" m="auto">About Me</Heading>
    <Box w="80%" display={"grid"} gridTemplateColumns={{base:"repeat(1,1fr)",xl:"repeat(2,1fr)","2xl":"repeat(2,1fr)"}} margin={"auto"} mt="100px" justifyContent="space-between">
      <Box textAlign={"left"}>
        <Text fontSize="28px">A passionate Full Stack Web developer educated from Masai School, Bengaluru. 
          Skilled in both frontend and backend development with command in HTML, CSS, JavaScript, ReactJS, NextJS, Typescript, and Redux. 
         <br /> <br /> High Adaptable to new skills and techs. 
          A team player with 1200+ hours of coding experience through Masai School.</Text>
      </Box>
      <Box display={"flex"} justifyContent={{base:"center",sm:"center","2xl":"right"}}>
        <Image src="https://avatars.githubusercontent.com/u/107460174?v=4" w="58%" h="90%" borderRadius={"20%"} />
      </Box>
    </Box>
    <Box h="150px"></Box>
    </Box>
    </>
  )
}

export default About