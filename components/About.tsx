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
      <div className="relative flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-6 sm:px-0">
        <div className="abtcard">
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-white">
            About Me
          </h1>
          <p className="text-center text-white mt-6 sm:mt-10">
            This website is currently under development! Please check back soon!
            <br />
            If you&apos;re looking for my socials, you can find them below.
          </p>
          {/* Align the socials in the center as a grid */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mt-10 sm:mt-16 text-4xl sm:text-5xl">
            <a href="https://www.x.com/hoddmusic" className="icon-hover" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.instagram.com/hoddmusic" className="icon-hover" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.soundcloud.com/hoddmusic" className="icon-hover" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faSoundcloud} />
            </a>
            <a href="https://www.tiktok.com/@hoddmusic" className="icon-hover" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTiktok} />
            </a>
            <a href="https://www.github.com/hodd1444" className="icon-hover" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <Link
          href="/"
          className="relative z-10 transition-all bg-gradient-to-tl from-[#C95291] to-[#5668EC] px-4 py-2 rounded-lg text-white font-bold hover:scale-110 hover:bg-gradient-to-tr hover:from-[#5668EC] hover:to-[#C95291] hover:transition-all hover:duration-500 duration-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default About;
