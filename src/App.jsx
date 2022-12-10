import { Box } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore"; 
import "./App.css";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore/>}/>
      </Routes>
    </Box>
  );
}

export default App;
