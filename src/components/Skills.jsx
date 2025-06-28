import git from "../assets/images/github.png"
import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import js from "../assets/images/java.png";
import react from "../assets/images/react.png";
import figma from "../assets/images/tailwindcss.png";
import Ts from "../assets/images/Group.png";
import python from "../assets/images/python.png";


export default function skills() {
    return(
       <div id="skills" className="bg-[#8F9DAA] w-full py-12">
  {/* Skills Heading */}
  <div className="text-center">
    <h1 className="text-3xl md:text-4xl font-medium inline-block border-2 border-gray-700 px-6 py-2">
      SKILLS
    </h1>
  </div>

  {/* Skills Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12 px-6 sm:px-12 lg:px-24">
    {/* Skill Item */}
    <div className="flex flex-col items-center">
      <img src={git} alt="Git" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">GIT</h3>
    </div>

    <div className="flex flex-col items-center">
      <img src={html} alt="HTML" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">HTML</h3>
    </div>

    <div className="flex flex-col items-center">
      <img src={css} alt="CSS" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">CSS</h3>
    </div>

    <div className="flex flex-col items-center">
      <img src={js} alt="JavaScript" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">JAVASCRIPT</h3>
    </div>

    <div className="flex flex-col items-center">
      <img src={react} alt="React" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">REACT</h3>
    </div>

    <div className="flex flex-col items-center">
      <img src={figma} alt="TailwindCSS" className="h-24 w-auto" />
      <h3 className="pt-3 text-2xl font-semibold">TAILWINDCSS</h3>
    </div>
  </div>
</div>

    )
}