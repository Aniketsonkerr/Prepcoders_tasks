import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?sports')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 h-full"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Gear Up for Victory!
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Get the best sports gear at unbeatable prices. Shop now and elevate
          your game!
        </p>
        <button className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
