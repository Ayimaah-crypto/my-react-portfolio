import img from "../assets/images/img1.jpg";
import Navbar from "../components/Navbar";
import img1 from "../assets/images/imggray.jpg";
import { Linkedin, Github, Instagram } from "lucide-react";
import Pic from "../assets/images/pc1.png"


export default function Home() {
  return (
    <section className="relative min-h-screen bg-[#8F9DAA] overflow-hidden">
  {/* Black slanted overlay */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-black z-0"
    style={{
      clipPath: "polygon(0 0, 100% 0, 50% 0%, 0 500%)",
    }}
  ></div>

  {/* Navbar */}
  <div className="relative z-10">
    <Navbar />
  </div>

  {/* Main content */}
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-16 md:py-24 text-gray-300 font-medium space-y-10 md:space-y-0">
    
    {/* Text section */}
    <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl">
        Hi! <span>I am</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
        Theodora Ayimaa Asare
      </h2>
      <p className="text-gray-600 text-sm sm:text-base">
        Front-end Developer / UI Designer
      </p>

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-4 pt-4">
        <div className="bg-gray-300 h-11 w-11 rounded text-gray-900 flex items-center justify-center border">
          <Linkedin />
        </div>
        <div className="bg-gray-300 h-11 w-11 rounded text-gray-900 flex items-center justify-center border">
          <Github />
        </div>
        <div className="bg-gray-300 h-11 w-11 rounded text-gray-900 flex items-center justify-center border hover:bg-gray-700">
          <Instagram />
        </div>
      </div>
      <button className=" bottom- left-7 rounded-full text-sm bg-gray-300 w-[165px] h-[44px] text-gray-900">
            <a href="">View CV</a>
          </button>
    </div>

    {/* Image section */}
    {/* Image section */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end relative -mb-32">
  <img
    src={Pic}
    alt="Profile"
    className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[450px] xl:w-[500px] h-auto object-contain drop-shadow-xl"
  />
</div>

  </div>
</section>


  );
} 
