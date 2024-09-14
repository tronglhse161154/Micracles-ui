import Container from "./components/ui/Container";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/layout/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCard from "./pages/ViewCard";

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={""} />
          <Route path="/elite-exclusive" element={""} />
          <Route path="/digimon" element={""} />
          <Route path="/one-piece" element={""} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewcard" element={<ViewCard />} />
        </Routes>
      
        <Footer />
    </Router>
    
    </>
  );
}

export default App;
