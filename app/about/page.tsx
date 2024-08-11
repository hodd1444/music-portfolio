import React from "react";
import About from "@/components/About";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full h-full ">
        <About />
    </div>
  </main>
  );
}
