"use client";

import Image from "next/image"
import art from "@/public/hero.jpg";
export function HeroSection() {
    return (
    <div className="mt-10 p-8 bg-blue-100 rounded-md">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 font-extrabold text-teal-800">
            Invest smarter, not harder!
          </h1>
          <p className="mb-6 leading-relaxed text-gray-700">
            Welcome to Stock Sessions. Explore financial ideas and insights to boost your investment.
          </p>
          <a href="/about" className="inline-block bg-teal-600 hover:bg-teal-800 text-white rounded-md py-2 px-6 transition-colors text-sm">
            Explore &#8618;
          </a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <Image src={art} className="object-cover rounded-md shadow-lg" width={700} height={500} alt="hero image" />
        </div>
      </div>
    </div>
    )
};