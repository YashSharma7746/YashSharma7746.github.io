import { Box, Button, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgLink } from "react-icons/cg";
import { DiCss3Full, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiChakraui, SiRedux } from "react-icons/si";
import { TfiHandPointRight } from "react-icons/tfi";
import beautybebo from "../Assets/beautybebo.png";
import bigbasket from "../Assets/bigbasket.png";
import surveymonkey from "../Assets/surveymonkey.png";
import toggltrack from "../Assets/toggltrack.png";
import flipkart from "../Assets/flipkart.png";
const project = [
  {
    img: flipkart,
    title: "VIP Mart",
    description: [
      "An online platform for purchasing different kinds of products",
      "User can Log In and Sign Up",
      "Add Items to Cart",
    ],
    techStack: ["html", "css", "javascript", "reactjs", "redux", "chakraui"],
    demo: "https://spiffy-crostata-d83d60.netlify.app/",
    github: "https://github.com/YashSharma7746/Flipkart_Clone",
  },
  {
    img: surveymonkey,
    title: "Survey Monkey",
    description: [
      "An online platform for creating different kinds of surveys",
      "User can create Questions and different kind of Options for answers",
    ],
    techStack: ["html", "css", "javascript", "reactjs", "redux", "chakraui"],
    demo: "https://roaring-bublanina-916643.netlify.app/",
    github: "https://github.com/Vishaltandale987/woozy-north-6172",
  },
  {
    img: bigbasket,
    title: "Big Basket",
    description: [
      "An online daily grocery purhcasing website",
      "User can Login or Signup",
      "User can Checkout",
      "Payment through Razorpay",
    ],
    techStack: ["html", "css", "javascript", "reactjs", "redux", "chakraui"],
    demo: "https://voluble-pegasus-1e44ee.netlify.app/",
    github: "https://github.com/YashSharma7746/BigBasket_Clone",
  },
  {
    img: toggltrack,
    title: "Toogl Track",
    description: [
      "An online platform for tracking daily tasks and activities",
      "User can create a schedule according to his convenience",
      "Track his/her daily tasks",
    ],
    techStack: ["html", "css", "javascript"],
    demo: "https://aesthetic-sundae-0740ce.netlify.app/",
    github: "https://github.com/YashSharma7746/TooglTrack_Clone",
  },
  {
    img: beautybebo,
    title: "Beauty Bebo",
    description: [
      "An online cosmetics purhcasing website",
      "User can Login or Signup",
    ],
    techStack: ["html", "css", "javascript"],
    demo: "https://dazzling-sawine-2c03da.netlify.app/",
    github: "https://github.com/YashSharma7746/Beauty_Bebo_Clone",
  },
];

const stacks = {
  html: <DiHtml5 />,
  javascript: <DiJavascript1 />,
  css: <DiCss3Full />,
  reactjs: <DiReact />,
  chakraui: <SiChakraui />,
  redux: <SiRedux />,
};

const Projects = () => {
  return (
    <Box id="projects">
      <Box h="100px"></Box>
      <Heading
        w={{ base: "70%", "2xl": "15%" }}
        m="auto"
        borderBottom={"5px solid white"}
      >
        Projects
      </Heading>
      <Box>
        {project.map((project) => {
          return (
            <Box
              className="project-card"
              w={{ base: "90%", "2xl": "70%" }}
              key={project.title}
              m="auto"
              boxShadow="rgba(89, 4, 168, 0.137) 4px 5px 4px 3px !important"
              mt="40px"
              border={"1.7px solid rgba(200, 137, 230, 0.635)"}
              p="20px"
            >
              <Box
                className="glass"
                display={"grid"}
                borderRadius="5px"
                backgroundColor="rgba(37, 38, 42, 0.44)"
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  sm: "repeat(1,1fr)",
                  lg: "repeat(2,1fr)",
                  "2xl": "repeat(2,1fr)",
                }}
                justifyContent="space-between"
              >
                <Box p="15px">
                  <Image src={project.img} w="100%" />
                  <Box fontSize={"25px"}>
                    Tech Stacks
                    <Box
                      className="project-tech-stack"
                      display={"flex"}
                      justifyContent="space-between"
                      p={{ base: "", "2xl": "10px" }}
                      boxShadow="rgba(89, 4, 168, 0.137) 4px 5px 4px 3px !important"
                      border={"1.7px solid rgba(200, 137, 230, 0.635)"}
                    >
                      {project.techStack.map((stack) => {
                        return (
                          <Box
                            cursor={"pointer"}
                            className="glass"
                            key={stack}
                            fontSize={{ base: "20px", "2xl": "30px" }}
                            p="8px"
                            backgroundColor="rgba(37, 38, 42, 0.44)"
                          >
                            {stacks[stack]}
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                </Box>
                <Box p="20px">
                  <Heading size="lg" className="project-title" color="#CD5FF8">
                    {project.title}
                  </Heading>
                  {project.description.map((desc) => {
                    return (
                      <Box
                        textAlign={"left"}
                        className="project-description"
                        key={desc}
                      >
                        <li
                          style={{
                            cursor: "pointer",
                            listStyle: "none",
                            display: "flex",
                            gap: "10px",
                            marginTop: "15px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        >
                          <TfiHandPointRight />
                          {desc}
                        </li>
                      </Box>
                    );
                  })}
                  <Box mt="20px">
                    <Link
                      className="project-deployed-link"
                      href={project.demo}
                      mr="30px"
                      isExternal
                      textDecoration={"none"}
                    >
                      <Button
                        backgroundColor={"#CD5FF8"}
                        colorScheme="transperent"
                      >
                        <CgLink style={{ marginRight: "10px" }} />
                        Live
                      </Button>
                    </Link>
                    <Link
                      className="project-github-link"
                      href={project.github}
                      isExternal
                    >
                      <Button
                        backgroundColor={"#CD5FF8"}
                        colorScheme="transperent"
                      >
                        <AiFillGithub style={{ marginRight: "10px" }} />
                        Git Hub
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box h="180px"></Box>
    </Box>
  );
};

export default Projects;
