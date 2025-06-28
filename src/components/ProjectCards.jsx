import hotel from "../assets/images/pic5.jpg"
import hotels from "../assets/images/hotels.png";
import agric from "../assets/images/agric.png";
import books from "../assets/images/books.png";
import events from "../assets/images/events.png";
import game from "../assets/images/game.png";
import portfolio from "../assets/images/portfolio1.png";
import { Link } from "react-router";

export default function project() {
  return (
    <div id="project">
      <div className="relative h-80 w-full overflow-hidden  ">
        {/* Background image */}
        <img
          src={hotel}
          alt=""
          className="h-full w-full object-cover "
        />

        {/* Soft dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>

        {/* Optional text */}
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <h2 className="text-gray-300 text-3xl font-semibold ">CURRENT PROJECTS</h2>
        </div>
      </div>
      <div className="bg-gray-900 h-20 w-full">
          <p className="text-center text-gray-300 font-medium pt-8">VIEW ALL</p>
      </div>

      <div className="grid grid-cols-3 bg-[#8F9DAA] p-25 gap-6">
        <div className="relative w-fit">
          <img src={hotels} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="">View Project</Link>
          </button>
        </div>
        <div className="relative w-fit">
          <img src={agric} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="https://echo-farms.netlify.app/">View Project</Link>
          </button>
        </div>
        <div className="relative w-fit">
          <img src={game} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="https://game-pal.vercel.app/">View Project</Link>
          </button>
        </div>
        <div className="relative w-fit">
          <img src={books} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="https://echo-stack.netlify.app/"></Link>
          </button>
        </div>
        <div className="relative w-fit">
          <img src={events} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="https://event-hive-echo-stack.netlify.app/">View Project</Link>
          </button>
        </div>
        <div className="relative w-fit">
          <img src={portfolio} alt="" className="h-54 w-90 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" />

          <button className="absolute bottom-0 left-7 rounded-full text-sm bg-gray-900 w-[165px] h-[44px] text-gray-300">
            <Link to="">View Project</Link>
          </button>
        </div>

      </div>
     
    </div>

  )
}