import Image from "next/image";
import Iphone from "@/images/mukham-main.png";
import { FadeIn } from "./FadeIn";

export function MukhamCard() {
    return(
        <div className="rounded-lg bg-[#2E3192] flex flex-col md:flex-row gap-9 px-6 md:w-full w-[350px] max-w-full mx-auto">
        <div className='flex flex-col gap-8 p-12'>
          <div className='flex gap-5 items-center '>
            <div className='bg-[#2E3192] border-8 border-white rounded-full w-[30px] h-[30px]'>{" "}</div>
            <h3 className='text-white md:text-3xl text-2xl font-semibold'>Mukham App</h3>
          </div>

          <div className='flex md:w-80 gap-8 justify-center'>
            <div className='h-[110px] w-[8px] bg-white hidden md:block'>{" "}</div>
            <p className='text-white '>The art of facial recognition is used for employee monitoring systems with fraudulent detection with MAuthN security certified by the FIDO alliances.</p>
          </div>

          {/* <div>
            <button className='text-white bg-orange-500 hover:bg-green-200 px-5 py-4 rounded-full flex gap-2 items-center justify-center border-2 border-r-4 border-b-4 border-[#B84F14] '>
              <div className=' bg-orange-500  border-4 border-white rounded-full w-[20px] h-[20px]'>{" "}</div>
              Text here
            </button>
          </div> */}
        </div>
        <FadeIn className='flex items-end justify-center md:justify-end'>
                <Image 
                    src={Iphone}
                    width={400}
                    height={300}
                    className="w-[400px] md:w-[400px] md:h-[300px] object-contain"
                />
            </FadeIn>
      </div>
    )
}