import separator from "../assets/images/separatorBlack 1.png";

export default function contacts() {
    return (
        <div id="contact" className="bg-[#8F9DAA] py-10 px-4">
  <h3 className="text-center text-3xl md:ml-144 font-medium border-2 border-gray-900 px-4 inline-block mx-auto">
    Contacts
  </h3>

  {/* Top separator image */}
  <div className="flex justify-center pt-10">
    <img src={separator} alt="" className="w-32 md:w-48" />
  </div>

  {/* Contact form */}
  <form
    action="https://formspree.io/f/xeogyyqn"
    method="POST"
    className="flex flex-col items-center mt-8 space-y-6 w-full max-w-md mx-auto"
  >
    <input
      type="text"
      className="w-full border-b-2 border-l-2 border-gray-900 px-3 py-2 bg-transparent placeholder-gray-700"
      placeholder="Your name"
      name="name"
      required
    />
    <input
      type="email"
      className="w-full border-b-2 border-l-2 border-gray-900 px-3 py-2 bg-transparent placeholder-gray-700"
      placeholder="Your email"
      name="email"
      required
    />
    <input
      type="tel"
      className="w-full border-b-2 border-l-2 border-gray-900 px-3 py-2 bg-transparent placeholder-gray-700"
      placeholder="Your mobile number"
      name="mobile"
      required
    />
    <textarea
      name="message"
      className="w-full h-32 border-b-2 border-l-2 border-gray-900 px-3 py-2 bg-transparent placeholder-gray-700"
      placeholder="Type a message"
      required
    ></textarea>
    <input
      type="submit"
      value="Submit"
      className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 cursor-pointer"
    />
  </form>

  {/* Bottom separator image */}
  <div className="flex justify-center pt-10 pb-10">
    <img src={separator} alt="" className="w-32 md:w-48" />
  </div>
</div>

    )
}