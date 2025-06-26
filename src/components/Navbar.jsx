import { useState } from "react";
import {Menu,X} from "lucide-react";



export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav className="flex text-white md:flex justify-around items-center">
           <div className="flex gap-50">
            <h1 className="max-w-7xl mx-auto flex justify-between items-center">
            WebDora</h1>
            {/* the deskstop links */}
           <div className="hidden md:flex space-x-3">
            <span>About me</span>
            <span>Skills</span>
            <span>Project</span>
            <span>Contact me</span> 
           </div>
           {/* the humburger button that is only visible on mobile */}
            <button onclick = {()=>setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            {/* mobile dropdown */}
            {isOpen && (
        <ul className="md:hidden mt-2 space-y-2 px-4">
          <li><a href="/" className="block py-2 border-b border-gray-700">Home</a></li>
          <li><a href="/about" className="block py-2 border-b border-gray-700">About</a></li>
          <li><a href="/contact" className="block py-2">Contact</a></li>
        </ul>
      )}
           </div>
        </nav>
        </>
    );
}