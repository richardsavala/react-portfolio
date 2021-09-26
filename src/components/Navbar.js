import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-cont font-medium text0-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Richard Savala
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-1 md:boerder-1 md:border-gray-700">
          <a href="#projects" className="mr-5 hover:text-white"></a>
        </nav>
      </div>
    </header>
  );
}
