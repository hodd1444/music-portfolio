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
    
    useEffect(() => {
        if(audioRef.current) audioRef.current.volume = volume / 100;
    }, [volume]);

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
          } else {
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
            <div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-6 sm:px-0">
                {/* Turntable deck: sized to fit both the width and the height of the viewport */}
                <div className="deck relative hidden md:block">
                    <div className="absolute w-[15%] h-[5%] z-10 top-[9%] left-[42.5%]">
                        <div className="flex justify-between items-center w-full h-full">
                            <button className="loadbtn w-[48%] h-full">
                                LOAD
                            </button>
                            <Link href="/about" className="abtbtn flex w-[48%] h-full items-center justify-center">
                                ABOUT
                            </Link>
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
                    <Link
                        href="https://soundcloud.com/hoddmusic/fall-in-love"
                        className="absolute top-[17.25%] left-[7.55%] w-[23.5%] z-10 cursor-pointer"
                    >
                        <SpinningCover songIsPlaying={isPlaying} className="w-full" />
                    </Link>
                    <button className="absolute w-[4.5%] h-auto z-10 left-[8%] top-[81.6%]" onClick={() => handlePlayPause()} aria-label={isPlaying ? "Pause" : "Play"}><img 
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
                            aria-label="Volume"
                            className="slider w-full h-auto"
                            style={{
                                transform: "rotate(-90deg)",
                            }}
                        />
                    </div>
                    <img
                        src={Main.src}
                        alt="Main"
                        className="w-full backdrop-blur-lg noselect dropshadow" 
                        draggable="false"
                    />
                </div>
                
                
                <div className="relative flex w-full max-w-sm justify-center items-center flex-col overflow-hidden mx-auto md:hidden"
                style={{
                    borderRadius: "20px",
                    boxShadow: "10px 10px 30px 10px rgba(5, 8, 36, 0.5), -3px -3px 40px 1px rgba(93, 95, 112, 0.2)",
                }}>
                    <div className="mobile-container">
                        <h1>Hi! My Name Is Hodd</h1>
                        <p>Below you can listen to my latest Track</p>
                        <Link href="https://soundcloud.com/hoddmusic/fall-in-love" className="link-mb">Fall In Love</Link>
                        <SpinningCover songIsPlaying={isPlaying} className="w-40 max-w-[60%]" />
                        <Link href="/about" className="mobile-btn">
                            About Me
                        </Link>
                    </div>
                    
                </div>

                <audio ref={audioRef} src="/audio/fallinlove.mp3" onEnded={() => setIsPlaying(false)} />

                <button 
                    className="
                    relative z-10 transition-all duration-500
                    bg-gradient-to-tl from-[#C95291] to-[#5668EC] 
                    px-4 py-2 rounded-lg text-white font-bold 
                    hover:scale-110
                    hover:bg-gradient-to-tl hover:to-[#C95291] hover:from-[#5668EC]"
                    onClick={() => handlePlayPause()}
                >{isPlaying ? "Pause" : "Listen"}</button>
                
            </div>
        </div>
    );
};

export default Hero;
