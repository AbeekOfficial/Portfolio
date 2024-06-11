import React from "react";
import abeek from "../../assets/abeek.png";
import { useTypewriter } from "react-simple-typewriter";

const Home: React.FC = () => {
  const [typeEffect] = useTypewriter({
    words: ["Abbosbek Ruzimov", "Frontend Developer"],
    loop: true,
    typeSpeed: 150,
    delaySpeed: 40,
  } as any);

  return (
    <div className="container">
      <div className="flex">
        <div className="mt-52 flex-col gap-48 items-center relative md:flex sm:flex-row mx-auto mb-3">
          <div>
            <h1
              style={{ top: "20px" }}
              className="text-5xl mt-10 absolute top-[30px] font-bold outline-none overflow-hidden z-10"
            >
              Hi, I am <br />
              {typeEffect}
            </h1>
            <p className="text-[#dd8cfa] text-3xl font-semibold mt-5">
              Frontend Developer
            </p>
            <div className="flex gap-4 mt-12">
              <button className="px-8 py-3 border-2 border-[#27AE60] hover:border-white bg-[#27AE60] hover:border-2 hover:bg-transparent hover:transition-all ease-in">
                Download CV
              </button>
              <button className="px-8 py-3 border-2 hover:border-green-500 hover:transition-all ease-in hover:bg-green-500">
                Learn More
              </button>
            </div>
          </div>
          <img src={abeek} alt="Abbosbek Ruzimov" width={500} />
        </div>
      </div>
      {/* <About /> */}
    </div>
  );
};

export default Home;
