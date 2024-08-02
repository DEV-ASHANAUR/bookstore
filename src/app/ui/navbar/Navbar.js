import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-purple-700 text-white px-4 py-2 h-[88px] md:sticky md:top-0">
      <Link href="/">
        <div className="flex items-center">
          <SparklesIcon className="w-6 h-6 md:w-12 md:h-12" />
          <p className="text-sm md:text-xl uppercase">BookStore</p>
        </div>
      </Link>
      <div>
        <p className="text-sm md:text-xl">Md. Ashanaur</p>
      </div>
    </div>
  );
};

export default Navbar;
