import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage } from './pages/homepage';
import { WhoAreWe } from './pages/whoarewe';
import ForOthers from './pages/forothers'; // Import the new component
import { Navbar } from './components/navbar';  

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/whoarewe" element={<WhoAreWe />} />
          <Route path="/forothers" element={<ForOthers />} /> {/* Add new route */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
