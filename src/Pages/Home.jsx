import { Box, Button, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { CgFileDocument } from "react-icons/cg";
import Typewriter from "typewriter-effect";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Box
        id="home"
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
        }}
        p={{ base: "15px", sm: "15px", lg: "30px", xl: "40px" }}
        w="85%"
        m="auto"
        mt="80px"
      >
        <Box
          justifyContent={"center"}
          alignItems="center"
          textAlign={"left"}
          mt="150px"
        >
          <Heading
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              "2xl": "45px",
            }}
            fontWeight={"medium"}
          >
            Hi There!
          </Heading>
          <Heading
            fontSize={{
              base: "30px",
              sm: "30px",
              md: "35px",
              lg: "40px",
              "2xl": "45px",
            }}
            fontWeight={"medium"}
          >
            I'M{" "}
            <span id="user-detail-name" style={{ color: "#CD5FF8" }}>
              Yash Sharma
            </span>
          </Heading>
          <Box
            color="#CD5FF8"
            fontSize={{
              base: "25px",
              sm: "25px",
              md: "30px",
              lg: "40px",
              "2xl": "45px",
            }}
          >
            <Typewriter
              options={{
                strings: ["MERN Stack Developer", "Problem Solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <Link href="../Assets/Resume.pdf" download>
            <Button
              colorScheme={"transperent"}
              className="link"
              fontSize={"25px"}
              p="0"
              id="resume-button-2"
              value="download"
            >
              <CgFileDocument
                style={{ marginBottom: "2px", marginRight: "10px" }}
              />
              Resume
            </Button>
          </Link>
        </Box>
        <Box
          display={"flex"}
          mt={{ base: "50px", "2xl": "none" }}
          justifyContent={{ base: "center", "2xl": "right" }}
        >
          <Image
            src="https://taxpro.co.in/wp-content/uploads/2021/03/XBRL-with-CI-Taxonomy.png"
            w="70%"
          />
        </Box>
      </Box>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Text>Designed and Created by Yash Sharma</Text>
    </>
  );
};

export default Home;
