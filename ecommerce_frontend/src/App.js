import Home from "./pages/home/Home"
import Announcement from "./components/Announcement"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"
import EachCategory from "./pages/category/EachCategory"

function App() {
  return (
    <BrowserRouter>
      <Announcement />
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/category" element={<EachCategory/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
