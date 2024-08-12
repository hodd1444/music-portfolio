"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import Main from "./Main.svg";
//import hodd from "./hodd.png";
import hodd from "./hodd_logo.svg"
import playpause from "@/public/icons/play_pause.svg";
//import fallinlove from "@/public/audio/fallinlove.mp3";

import { SpinningCover } from "./ui/spinning-cover";
import LightingSpheres from "./ui/lighting-spheres";


const Hero = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(55); // Initialize volume to 50%
    
    if(audioRef.current) audioRef.current.volume = volume / 100;

    const handleVolumeChange = (event: any) => {
      setVolume(event.target.value);
      // Here you would connect the volume value to your audio player
      if(audioRef.current) audioRef.current.volume = event.target.value / 100;
    };
    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
        if(audioRef.current) {
          if(isPlaying) {
            audioRef.current.pause();
          } else {<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>
            audioRef.current.play();
          }
        }
    }

    const handleCue = () => {
        if(audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.pause();
        }
    }

    return (
        <div>
            <ShootingStars />
            <StarsBackground />
            <LightingSpheres />
            <div className="flex items-center justify-center h-[calc(100dvh)] overflow-hidden">
                <div className="relative hidden md:block">
                    <div className="absolute w-[15%] h-[5%] z-10 top-[9%] left-[42.5%]">
                        <div className="flex justify-between items-center w-full h-full">
                            <button className="loadbtn w-[48%] h-full">
                                LOAD
                            </button>
                            <button className="abtbtn w-[48%] h-full">
                                <Link href="/about">ABOUT</Link>
                            </button>
                        </div>
                                               
                        
                    </div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[90%] z-10 w-[15%] h-auto">
                        <img
                            src={hodd.src}
                            alt="Logo"
                            className="noselect w-full h-full"
                            draggable="false"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-tl from-[#C95291] to-[#5668EC]"
                        style={{
                            WebkitMaskImage: `url(${hodd.src})`,
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskSize: 'cover',
                            WebkitMaskPosition: 'center',
                            maskImage: `url(${hodd.src})`,
                            maskRepeat: 'no-repeat',
                            maskSize: 'cover',
                            maskPosition: 'center',
                        }}
                        >

                            </div>
                    </div>
                    <div className="absolute top-[17.25%] left-[7.55%] z-10">
                        <Link href="https://soundcloud.com/hoddmusic/fall-in-love" className="cursor-pointer">
                            <SpinningCover songIsPlaying={isPlaying.valueOf()} />
                        </Link>
                    </div>
                    <button className="absolute w-[4.5%] h-auto z-10 left-[8%] top-[81.6%]" onClick={() => handlePlayPause()}><img 
                        src={playpause.src}
                        alt="playpause"
                        draggable="false"
                        className="noselect w-full h-full"
                    />
                    </button>
                    <div className="absolute w-[8.7%] h-auto top-[67.5%] left-[42.6%] z-10">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="slider w-full h-auto" // Tailwind or custom styling for the slider
                            style={{
                                transform: "rotate(-90deg)",
                            }}
                        />
                    </div>
                    <audio ref={audioRef} src="/audio/fallinlove.mp3" />
                    <img
                        src={Main.src}
                        alt="Main"
                        className="mx-auto backdrop-blur-lg noselect dropshadow" 
                        draggable="false"
                    />
                </div>
                
                
                <div className="relative flex justify-center w-[85%] items-center flex-col overflow-hidden mx-auto sm:px-10 md:hidden"
                style={{
                    borderRadius: "20px",
                    boxShadow: "10px 10px 30px 10px rgba(5, 8, 36, 0.5), -3px -3px 40px 1px rgba(93, 95, 112, 0.2)",
                }}>
                    <div className="mobile-container">
                        <h1 className="">Hi! My Name Is Hodd</h1>
                        <p>Below you can listen to my latest Track</p>
                        <Link href="https://soundcloud.com/hoddmusic/fall-in-love" className="link-mb">Fall In Love</Link>
                        <SpinningCover songIsPlaying={isPlaying.valueOf()}/>
                        <button className="mobile-btn">
                            <Link href="/about">About Me</Link>
                        </button>
                    </div>
                    
                </div>

                <button 
                    className="
                    absolute 
                    bottom-[5%] left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500
                    bg-gradient-to-tl from-[#C95291] to-[#5668EC] 
                    px-4 py-2 rounded-lg text-white font-bold 
                    hover:px-5 hover:py-3 hover:bottom-[4.5%] hover:transition-all hover:duration-500
                    hover:bg-gradient-to-tl hover:to-[#C95291] hover:from-[#5668EC]"
                    onClick={() => handlePlayPause()}
                >{isPlaying ? "Pause" : "Listen"}</button>
                
            </div>
        </div>
    );
};

export default Hero;