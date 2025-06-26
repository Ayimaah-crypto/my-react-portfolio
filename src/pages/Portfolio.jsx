import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Project from "../components/ProjectCards"
import Contacts from "../components/Services";


export default function () {
  return (
    <div>
       <Home/>
       <AboutMe/>
       <Skills/>
       <Project/>
       <Contacts/>
       <Footer/>
    </div>
  )

}