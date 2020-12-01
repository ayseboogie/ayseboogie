import React, { useState } from "react";
import Link from "next/link";

function header() {
    const [isExpanded, toggleExpansion] = useState(false);
    const Sunrise = "/Sunrise.png";
    return (
        <div className="image top-0 left-0 right-0 bg-cover bg-center h-80">
        <nav className="flex items-center justify-between flex-wrap p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                {/* put logo here */}
                <span className="font-semibold text-xl tracking-tight">"artists"</span>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => toggleExpansion(!isExpanded)}
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    isExpanded ? `block` : `hidden`
                } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="flex justify-end items-center text-sm lg:flex-grow">
          <span className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white">
            <Link href="/artists">
              <a>Artists</a>
            </Link>
          </span>
                    <span className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-white">
            <Link href="/music">
              <a>Music</a>
            </Link>
          </span>
                    <span className="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white text-white">
            <Link href="/videos">
              <a>Vidoes</a>
            </Link>
          </span>
                </div>
            </div>
        </nav>
            <style jsx>
                {`
          .image {
            background-image: url(${Sunrise});
          }
        `}
            </style>
        </div>
    );
}

export default header;
