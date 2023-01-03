import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { HamburgerIcon, CloseIcon, PhoneIcon } from '@chakra-ui/icons';
import {AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineTool, AiOutlineUser} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Links = [
  {title:'Home', icon: <AiOutlineHome />}, 
  {title:'About', icon: <AiOutlineUser/>}, 
  {title:'Skills', icon: <AiOutlineTool />}, 
  {title:'Projects', icon: <AiOutlineFundProjectionScreen />}, 
  {title:'Contact', icon: <PhoneIcon />}, 
  {title:'Resume', icon: <CgFileDocument />}];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('pruple.200', 'purple.700'),
    }}
    href={`${children}`}>
    {children}
  </Link>
);

export default function Menuu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('black.100', 'black.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            backgroundColor="#0A0416"
            colorScheme={"#0A0416"}
            display={{ lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} w="15%" m="auto" display={{ lg: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Box className='link' display={"flex"} alignItems={"center"}>
            <AiOutlineHome style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/" >Home</Link>
          </Box>
          <Box className='link' display={"flex"} alignItems={"center"}>
            <AiOutlineUser style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/about">About</Link>
          </Box>
          <Box className='link' display={"flex"} alignItems={"center"}>
            <AiOutlineTool style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/skills">Skills</Link>
          </Box>
          <Box className='link' display={"flex"} alignItems={"center"}>
            <AiOutlineFundProjectionScreen style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/projects">Projects</Link>
          </Box>
          <Box className='link' display={"flex"} alignItems={"center"}>
            <PhoneIcon style={{marginBottom:"2px",marginRight:"10px"}}/>
            <Link to="/contact">Contact</Link>
          </Box>
          <Box className='link' display={"flex"} alignItems={"center"}>
            <CgFileDocument style={{marginBottom:"2px",marginRight:"10px"}}/>
            <a href="https://drive.google.com/file/d/1-27JqVP743yK-A3ZE3CvIRpF32OzsQfL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          </Box>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}