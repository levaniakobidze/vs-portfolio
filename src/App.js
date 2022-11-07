import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello/Hello";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Hello />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/_projects"} element={<Projects />} />
        <Route path={"/_about"} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
