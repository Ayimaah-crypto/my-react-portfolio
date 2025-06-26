import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            
            <div className="text-center mb-6">
                <h1 className="text-xl font-bold">
                    <span className="text-white">MY</span>
                    <span className="text-primary ml-1">PORTFOLIO</span>
                </h1>
            </div>

        
            <span className="text-white/70 text-sm flex justify-center  items-center mb-5">
                            © 2025 Portfolio <Link to="" className="font-bold text-pink-300 hover:text-pink-200 transition-colors duration-300">Theodora Asare</Link>
                        </span>

            <div className="flex justify-center gap-8 mb-6 flex-wrap text-sm">
                <span className="cursor-pointer hover:text-purple-400">Home</span>
                <span className="cursor-pointer hover:text-purple-400">About</span>
                <span className="cursor-pointer hover:text-purple-400">Services</span>
                <span className="cursor-pointer hover:text-purple-400">Get in touch</span>
                <span className="cursor-pointer hover:text-purple-400">FAQs</span>
            </div>

            
            <hr className="border-white mx-8 mb-6" />

           
            <div className="flex justify-between items-center mx-8 flex-wrap gap-4 md:flex-nowrap">
               

              
                <div className="flex gap-3 order-2 md:order-2">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Instagram className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 cursor-pointer">
                        <Facebook className="w-4 h-4" />
                    </div>
                </div>

               
                <p className="text-xs text-gray-300 order-3 md:order-3 w-full md:w-auto text-center md:text-right">
                    Non Copyrighted © 2025 Upload by Theodora Asare
                </p>
            </div>


        </footer>
    );
}