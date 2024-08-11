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
            <div className="flex items-center justify-center h-screen ">
                <div className="absolute z-10 align-middle grid grid-cols-2 gap-[14px] justify-between top-[20.9%] ">
                    <button className="loadbtn">
                        LOAD
                    </button>
                    <Link href="/about">
                        <button className="abtbtn">
                            ABOUT
                        </button>
                    </Link>                        
                    
                </div>
                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100%] z-10 w-[165px] h-auto">
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
                <div className="absolute top-[28%] left-[22.19%] z-10">
                    <SpinningCover songIsPlaying={isPlaying.valueOf()} />
                </div>
                <button className="absolute align-middle justify-center z-10 left-[22.4%] top-[71%]" onClick={() => handlePlayPause()}><img 
                    src={playpause.src}
                    alt="playpause"
                    draggable="false"
                />
                </button>
                <div className="absolute top-[61.7%] left-[44.8%] z-10">
                    <div className="relative">
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="slider" // Tailwind or custom styling for the slider
                            style={{
                            transform: "rotate(-90deg)", // Rotate the slider to match the UI
                            width: "100px", // Adjust width as needed
                            // Customize further to match the design
                            }}
                        />
                    </div>
                </div>
                <audio ref={audioRef} src="/audio/fallinlove.mp3" />
                <img
                    src={Main.src}
                    alt="Main"
                    className="mx-auto backdrop-blur-lg noselect dropshadow" 
                    draggable="false"
                />
                <button 
                    className="
                    absolute 
                    bottom-[5%] left-1/2 transform -translate-x-1/2 z-10 transition-all duration-500
                    bg-gradient-to-tl from-[#C95291] to-[#5668EC] 
                    px-4 py-2 rounded-lg text-white font-bold 
                    hover:px-5 hover:py-3 hover:bottom-[4.5%] hover:transition-all hover:duration-500
                    hover:bg-gradient-to-tl hover:to-[#C95291] hover:from-[#5668EC]"
                    onClick={() => handlePlayPause()}
                >Listen</button>
                
            </div>
        </div>
    );
};

export default Hero;