import Container from "./components/ui/Container";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/layout/footer/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={""} />
            <Route path="/elite-exclusive" element={""} />
            <Route path="/digimon" element={""} />
            <Route path="/one-piece" element={""} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Routes>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
