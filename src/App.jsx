import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ViewCard from "./pages/ViewCard";
import DetailPage from "./pages/DetailPage";
import AdminPage from "./pages/AdminPage";
import LayoutWithNavbar from "./LayoutWithNavbar";  // Import Layout mới

function App() {
  return (
    <Router>
      <Routes>
        {/* Bọc các route với LayoutWithNavbar */}
        <Route element={<LayoutWithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon" element={""} />
          <Route path="/elite-exclusive" element={""} />
          <Route path="/digimon" element={""} />
          <Route path="/one-piece" element={""} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/viewcard" element={<ViewCard />} />
          <Route path="/card-detail/:id" element={<DetailPage />} />
        </Route>

        {/* Route for admin without the navbar */}
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
