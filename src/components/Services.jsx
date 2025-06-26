import separator from "../assets/images/separatorBlack 1.png";

export default function contacts() {
    return (
        <div className="bg-[#8F9DAA] h-full">
            <h3 className="text-center text-3xl font-meduim  border-2 ml-140 mr-140">Contacts</h3>
            <div className="flex items-center">
                <img src={separator} alt="" className="ml-147 pt-10" />
            </div>
            <form action="https://formspree.io/f/xeogyyqn" method="POST" className="flex flex-col items-center ">
                <input type="text" className="border-gray-900 border-b-2 border-l-2 mt-10 w-70" placeholder="Your name" />
                <input type="email" className="border-gray-900 border-b-2 border-l-2 mt-6 w-70" name="" id="" placeholder="Your Email" />
                <input type="number" className="border-gray-900 border-b-2 border-l-2 mt-6 w-70" name="" id="" placeholder="Your Mobile Number" />
                <textarea name="" className="border-gray-900 border-b-2 border-l-2 mt-10 h-30 w-70 " placeholder="Type a message" ></textarea>
                <input type="submit" placeholder="Submit" className=" border-gray-900 border-l-2 border-r-2 mt-5 p-2" />

            </form>
            <div className="flex items-center">
                <img src={separator} alt="" className="ml-147 pt-10 pb-10" />
            </div>
        </div>
    )
}