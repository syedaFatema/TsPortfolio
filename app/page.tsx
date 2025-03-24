"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/bg-img1.jpg)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[40px] text-white font-semibold">
            Shaping the Future of the Web with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Innovative Designs
            </span>
          </h1>
          <p className="text-gray-200 text-[17px] hidden md:block">
            I&apos;m a Developer & Designer passionate about creating impactful experiences.
            Explore my work to see how I blend creativity and technology to make a meaningful impact.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-sky-800 hover:bg-sky-600 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              My skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-sky-800 hover:bg-sky-600 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-sky-800 hover:bg-sky-700 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-sky-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My skills
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-sky-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>

        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-sky-800 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Contact me
        </Link>
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={1000}
        width={1000}
        className="absolute top-10 left-[100px] right-[50px] z-[150]"
      />
    </main>
  );
}
