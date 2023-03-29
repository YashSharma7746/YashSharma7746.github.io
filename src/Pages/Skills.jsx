import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {
  DiCss3Full,
  DiGit,
  DiHtml5,
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import {
  SiChakraui,
  SiCypress,
  SiJest,
  SiNetlify,
  SiNpm,
  SiRedux,
  SiTypescript,
  SiVisualstudiocode,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import GitHubCalender from "react-github-calendar";
import "./all.css";
const skills = [
  {
    icon: <DiJavascript1 />,
    label: "JavaScript",
  },
  {
    icon: <DiHtml5 />,
    label: "HTML",
  },
  {
    icon: <DiCss3Full />,
    label: "CSS",
  },
  {
    icon: <DiReact />,
    label: "ReactJS",
  },
  {
    icon: <SiChakraui />,
    label: "Chakra UI",
  },
  {
    icon: <SiTypescript />,
    label: "TypeScript",
  },
  {
    icon: <TbBrandNextjs />,
    label: "NextJS",
  },
  {
    icon: <SiRedux />,
    label: "Redux",
  },
];
const tools = [
  {
    icon: <AiFillGithub />,
    label: "Git Hub",
  },
  {
    icon: <SiVisualstudiocode />,
    label: "VS Code",
  },
  {
    icon: <SiNetlify />,
    label: "Netlify",
  },
  {
    icon: <SiNpm />,
    label: "NPM",
  },
  {
    icon: <SiCypress />,
    label: "Cypress",
  },
  {
    icon: <DiGit />,
    label: "Git",
  },
  {
    icon: <SiJest />,
    label: "Jest",
  },
];
const Skills = () => {
  return (
    <Box id="skills">
      <Box h="100px"></Box>
      <Heading
        w={{ base: "70%", "2xl": "15%" }}
        p="10px"
        m="auto"
        borderBottom={"5px solid white"}
      >
        Skills
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap="40px"
        justifyContent="space-between"
        w="80%"
        m="auto"
        mt="100px"
      >
        {skills.map((i) => {
          return (
            <Box
              key={i.label}
              className="skills-card"
              cursor={"pointer"}
              boxShadow="rgba(89, 4, 168, 0.137) 4px 5px 4px 3px !important"
              p="20px"
              border={"1.7px solid rgba(200, 137, 230, 0.635)"}
              borderRadius="6px"
              mt="20px"
            >
              <Box
                className="glass"
                borderRadius="5px"
                backdropFilter={"blur(5px)"}
                backgroundColor="rgba(37, 38, 42, 0.44)"
                p="15px"
              >
                <Box
                  display={"flex"}
                  className="skills-card-img"
                  justifyContent="center"
                  fontSize={"80px"}
                >
                  {i.icon}
                </Box>
                <Text mt="10px" className="skills-card-name">
                  {i.label}
                </Text>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box h="100px"></Box>
      <Heading
        w={{ base: "70%", "2xl": "15%" }}
        p="10px"
        m="auto"
        borderBottom={"5px solid white"}
      >
        Tools
      </Heading>
      <Box
        display={"grid"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          lg: "repeat(2,1fr)",
          xl: "repeat(4,1fr)",
        }}
        gap="40px"
        justifyContent="space-between"
        w="80%"
        m="auto"
        mt="100px"
      >
        {tools.map((i) => {
          return (
            <Box
              key={i.label}
              cursor={"pointer"}
              boxShadow="rgba(89, 4, 168, 0.137) 4px 5px 4px 3px !important"
              p="20px"
              border={"1.7px solid rgba(200, 137, 230, 0.635)"}
              borderRadius="6px"
              mt="20px"
            >
              <Box
                className="glass"
                borderRadius="5px"
                backgroundColor="rgba(37, 38, 42, 0.44)"
                p="15px"
              >
                <Box display={"flex"} justifyContent="center" fontSize={"80px"}>
                  {i.icon}
                </Box>
                <Text mt="15px">{i.label}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box h="100px"></Box>
      <Heading
        w={{ base: "70%", "2xl": "15%" }}
        p="10px"
        m="auto"
        borderBottom={"5px solid white"}
      >
        Git Status
      </Heading>
      <Box
        display={"flex"}
        justifyContent="center"
        id="github-streak-stats"
        mt="50px"
      >
        <GitHubCalender
          username="YashSharma7746"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Box>
      <Box h="150px"></Box>
    </Box>
  );
};

export default Skills;
