"use client";

import React from "react";
import Link from "next/link";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGithub, faInstagram, faTiktok, faSoundcloud } from '@fortawesome/free-brands-svg-icons';



const About = () => {
  return (
    <div>
      <ShootingStars />
      <StarsBackground />
      <div className="flex items-center justify-center h-[calc(100dvh)]">
        <div className="abtcard">
          <h1 className="text-5xl font-bold text-center text-white">
            About Me
          </h1>
          <p className="text-center text-white mt-10">
            This website is currently under development! Please check back soon!
            <br />
            If you&apos;re looking for my socials, you can find them below.
          </p>
          {/* Align the socials in the center as a grid */}
          <div className="flex justify-center mt-16">
            <a href="https://www.x.com/hoddmusic" className="icon-hover">
                <FontAwesomeIcon icon={faXTwitter} size="3x" className="mx-5" />
            </a>
            <a href="https://www.instagram.com/hoddmusic" className="icon-hover">
                <FontAwesomeIcon icon={faInstagram} size="3x" className="mx-5" />
            </a>
            <a href="https://www.soundcloud.com/hoddmusic" className="icon-hover">
                <FontAwesomeIcon icon={faSoundcloud} size="3x" className="mx-5" />
            </a>
            <a href="https://www.tiktok.com/@hoddmusic" className="icon-hover">
                <FontAwesomeIcon icon={faTiktok} size="3x" className="mx-5" />
            </a>
            <a href="https://www.github.com/hodd1444" className="icon-hover">
                <FontAwesomeIcon icon={faGithub} size="3x" className="mx-5" />
            </a>
          </div>
        </div>
        <Link href="/">
          <button className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 z-10 transition-all bg-gradient-to-tl from-[#C95291] to-[#5668EC] px-4 py-2 rounded-lg text-white font-bold hover:px-5 hover:py-3 hover:bottom-[4.5%] hover:bg-gradient-to-tr hover:from-[#5668EC] hover:to-[#C95291] hover:transition-all hover:duration-500 duration-500">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
