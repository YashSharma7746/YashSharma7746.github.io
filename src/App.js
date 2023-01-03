import { Box, Heading, Image } from '@chakra-ui/react';
import AllRoutes from './Components/AllRoutes';
import Navbar from './Components/Navbar';
import "./style.css";

function App() {
  return (
    <div style={{color:"white",backgroundColor:"#0A0416"}}>
      <Box className='App'>
        <Navbar />
        <AllRoutes />
      </Box>
    </div>
  );
}

export default App;
