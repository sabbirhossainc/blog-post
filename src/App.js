import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Posts />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
