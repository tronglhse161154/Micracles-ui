import Container from "./components/ui/Container";
import Navbar from "./components/layout/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Footer from "./components/layout/footer/Footer";

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
          </Routes>
        </div>

        <Footer />
      </Container>
    </Router>
  );
}

export default App;
