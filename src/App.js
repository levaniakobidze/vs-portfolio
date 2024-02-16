import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello/Hello";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
function App() {
  const blackDivRef = useRef();
  const greenDivRef = useRef();

  useEffect(() => {
    gsap.to(greenDivRef.current, 1, { y: "-200%", delay: 1 });
    gsap.to(blackDivRef.current, 1, { y: "-100%", delay: 2 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div ref={greenDivRef} className="green-div"></div>
      <div ref={blackDivRef} className="black-div">
        <h1>Levan iakobidze</h1>
        <p>Full-Stack Web Developer</p>
      </div>
      <Routes>
        <Route path={"/"} element={<Hello />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/_projects"} element={<Projects />} />
        <Route path={"/_about"} element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
