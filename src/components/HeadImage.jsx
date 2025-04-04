import HomePageImage from "../assets/AchtergrondPNG.jpg";

const HeadImage = () => {
    return (
        <div className="relative w-full h-auto flex flex-col items-center">
            <div className="relative w-full h-screen">
                <img
                    src={HomePageImage}
                    className="w-full h-full object-cover select-none"
                    alt="HomePageImage"
                    draggable="false"/>
                <div className="absolute top-1/4 sm:top-1/3 ml-6 sm:ml-10 md:ml-20 text-white max-w-screen-lg">
                    <h1 className="text-[30px] sm:text-[40px] md:text-[55px] font-bold leading-tight text-left">
                        <span className="text-white">Discover</span>, <span className="text-white">use AI</span>,
                    </h1>
                    <h1 className="text-[30px] sm:text-[40px] md:text-[55px] font-bold mt-2 leading-tight text-left">
                        <span className="text-white">Understand</span> <span className="text-white">legal guidelines.</span>
                    </h1>
                    <p className="text-[16px] sm:text-[22px] md:text-[26px] text-gray-300 mt-4 text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam voluptates sed beatae?
                    </p>
                    <button className="mt-6 px-6 py-3 text-[14px] sm:text-[16px] md:text-[18px] border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-400">
                        Start learning
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeadImage;