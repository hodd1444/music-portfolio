import React from "react";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import Main from "./Main.png";
import hodd from "./hodd.png";

const Hero = () => {
    return (
        <div>
            <ShootingStars />
            <StarsBackground/>
            <div className="flex items-center justify-center h-screen">

                <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[100%] z-10 w-[165px] h-auto">
                    <img
                        src={hodd.src}
                        alt="Main"
                        className="w-full h-full"
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
                
                <img
                    src={Main.src}
                    alt="Main"
                    className="mx-auto backdrop-blur-lg" 
                />
                
            </div>
        </div>
    );
};

export default Hero;