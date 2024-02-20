import React from "react";

const Hero = () => {
  return (
    <div className="px-[4vw] relative  sm:mt-4 min-h-[72vh] flex flex-col-reverse  justify-between items-center gap-[30vh]  w-screen sm:flex-row">
      <div className="w-[60vw]  flex flex-col gap-8">
        <h2 className="sm:text-5xl text-3xl text-center sm:text-left font-semibold mt-8">Upscaling Made PRACTICAL <br />  With PW Skills</h2>
        <p>
          PW Skills is your one-stop-shop for upscaling. Get maximum value for
          time and resources you invest, with job-ready courses &
          high-technology, available at the lowest cost.
        </p>
        <button className="bg-[#D2614B] py-3 text-white rounded-xl sm:w-[200px] hover:bg-[#c53418]">Explore Course</button>
      </div>
      <div className="sm:w-[40vw] w-[70vw] mt-[30vh] sm:mt-10 min-h-fit flex items-center justify-center relative">
        <img className="absolute " src="./src/assets/Images/hero-shadow.png" alt="img" />
        <img className="absolute"  src="./src/assets/Images/hero-bg.png" alt="img" />
      </div>
    </div>
  );
};

export default Hero;
