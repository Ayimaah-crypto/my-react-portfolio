import img1 from "../assets/images/imggray.jpg"
import separator from "../assets/images/separatorBlack 1.png"

export default function () {
    return (
        <section id="aboutMe">
  {/* IT BERRIES Hero Section */}
  <div className="relative h-auto md:h-96 w-full overflow-hidden">
    {/* Background Image */}
    <img
      src={img1}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gray-900 bg-opacity-40 z-10"></div>

    {/* Text Content */}
    <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
      <h2 className="text-white text-2xl md:text-4xl font-semibold pb-4">
        IT BERRIES
      </h2>
      <p className="text-base md:text-lg text-gray-200 max-w-4xl">
        🍓 IT Berries is the seed of something new — a space where I’m starting
        to share my journey through code, design, and digital creativity.
        It’s a growing collection of lessons, discoveries, and ideas from my experience entering the tech world as a new web developer and engineer.
        Whether it’s a small tip or a big breakthrough, every berry counts.
      </p>
    </div>
  </div>

  {/* About Me Section */}
  <div className="bg-[#8F9DAA] py-16 px-4 text-center">
    <h1 className="text-3xl md:text-4xl font-medium inline-block border-2 border-gray-800 px-6 py-2">
      About Me
    </h1>
    <p className="mt-4 text-base md:text-lg text-gray-800">
      I am a frontend developer.
    </p>

    {/* Explore Divider */}
    <div className="pt-10 text-gray-900">
      <span className="text-sm md:text-base">| <span className="font-bold">EXPLORE</span> |</span>
    </div>

    {/* Separator Image */}
    <div className="flex justify-center pt-6">
      <img src={separator} alt="" className="w-32 md:w-48" />
    </div>

    {/* Grid Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
      {/* Card 1: Content Writer */}
      <div className="bg-none border border-gray-300 shadow-2xl p-6 text-left rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
        <h2 className="font-semibold text-lg mb-2">Content Writer</h2>
        <p className="text-gray-800 text-sm">
          ✍️ Crafting stories, poems, and words that inspire hearts and stir imagination.
          I write to awaken emotion, spark thought, and leave a piece of light in every line —
          one word at a time, shaping worlds, healing souls, and honoring truth.
        </p>
      </div>

      {/* Card 2: Web Development */}
      <div className="bg-none border border-gray-300 shadow-2xl p-6 text-left rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
        <h2 className="font-semibold text-lg mb-2">Web Development</h2>
        <p className="text-gray-800 text-sm">
          💻 Designing and building seamless digital experiences with purpose and precision.
          I craft user-friendly interfaces that not only function beautifully but also tell a story —
          one line of code at a time, solving problems, sparking interaction, and bringing ideas to life.
        </p>
      </div>

      {/* Card 3: Electronics Engineer */}
      <div className="bg-none border border-gray-300 shadow-2xl p-6 text-left rounded-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
        <h2 className="font-semibold text-lg mb-2">Electronics Engineer</h2>
        <p className="text-gray-800 text-sm">
          ⚡ Exploring the invisible language of circuits and signals to build systems that power our world.
          I design with logic and purpose — one connection at a time, solving real problems, driving innovation,
          and bridging ideas with technology.
        </p>
      </div>
    </div>

    {/* Bottom Separator */}
    <div className="flex justify-center pt-10">
      <img src={separator} alt="" className="w-32 md:w-48" />
    </div>
  </div>
</section>

    )
}