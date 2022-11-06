import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Hello from "./pages/hello/Hello";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Hello />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/_projects"} element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
