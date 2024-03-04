import React from 'react'
import Image from "next/image";
import Placeholder from "../images/cardimg.png";
import { MukhamCard } from './MukhamCard';
import DeepTechImg from '@/images/Deeptech.png';

import FidoImg from '@/images/FIDO_Alliance_logo.png';
import CSAImg from '@/images/DIGITAL-FORTRESS-CSA.png';
import TrophyImg from '@/images/trophy.svg';

function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 lg:p-24 mt-16 md:mt-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 w-full mb-[70px]">
        <div className=" rounded-lg lg:col-span-2">
          <h2 className="text-2xl lg:text-6xl font-bold mt-2">
            Protect Your Digital World with Passwordless Authentication.
          </h2>
          <h2 className="text-xl text-orange-400 lg:text-4xl font-bold mt-2">"Experience Our Award Winning Product"</h2>
        </div>

        
        <div className="h-32 rounded-lg">
          <p className="mt-2">
            DigitalFortress Private Limited offers a secure and convenient
            passwordless authentication solution to safeguard your online
            accounts and prevent cyber attacks. Say goodbye to the hassle of
            remembering passwords and protect your digital identity with ease.
          </p>
          <br />
          <a href="#" className="text-black underline flex text-xl">
            Get Started{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className=" underline ml-1 mt-1"
            >
              <path
                d="M19 3.5L5 17.5"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 13.77V3.5H8.73"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        x-data="{}"
        x-init="$nextTick(() => {
          let ul = $refs.logos;
          ul.insertAdjacentHTML('afterend', ul.outerHTML);
          ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll h-[500px]"
        >
          <li className=" rounded-3xl">
            <Image
              src={DeepTechImg}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={FidoImg}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={CSAImg}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={TrophyImg}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-90 lg:w-80 h-80 w-60"
            />
          </li>
          {/* <li className=" rounded-3xl">
            <Image
              src={Placeholder}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={Placeholder}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={Placeholder}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li>
          <li className=" rounded-3xl">
            <Image
              src={Placeholder}
              width={400}
              height={300}
              className=" rounded-3xl  lg:h-full lg:w-80 h-80 w-60"
            />
          </li> */}
        </ul>
      </div>

      <div className="md:h-screen rounded-lg flex flex-col gap-6 justify-center items-center">
        <div className='flex flex-col justify-center items-center gap-3'>
          <h2 className="font-sans text-2xl lg:text-5xl font-bold mt-2">
            Changes we Introducted to the world 
          </h2>
          <p>Harness the power of AI and enhance your security measures with our cutting-edge product offerings.</p>
        </div>

        <MukhamCard/>

      </div>
      

    </main>
  );
}

export default Hero;