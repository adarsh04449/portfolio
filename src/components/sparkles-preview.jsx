"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import Navbar from "../components/Nav/Navbar"
import sdsuLogo from "../assets/sdsu.png"

export function SparklesPreview() {
  return (
    <div className="relative h-[40rem] w-full overflow-hidden bg-black text-white z-0">
      <div className="absolute inset-0 pointer-events-none z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.9}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#9F7AEA"
        />
      </div>
      
      <Navbar/>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold">
            Hi, I'm Adarsh Shresth
        </h1>

        <h2 className="mt-4 text-xl md:text-2xl text-white-300 flex flex-col md:flex-row items-center justify-center gap-2 text-center">
            <span>B.S. in Computer Science,</span>
            <span>San Diego State University</span>
            <img
                src={sdsuLogo}
                alt="SDSU Logo"
                className="w-12 h-8 md:w-14 md:h-10 translate-y-[2px]"
            />
        </h2>
        <a
          href="https://drive.google.com/file/d/1zOBV2Je5E3j5bco9-HVw8Xw2EhZuh0UF/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 
          text-white font-semibold shadow-lg border border-gray-600
          hover:shadow-xl hover:brightness-125 hover:scale-105 transform transition duration-300"
        >
          Resume
        </a>

      </div>

    </div>
  );
}
