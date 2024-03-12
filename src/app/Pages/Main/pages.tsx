'use client'

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MySVGComponent from "@/app/components/Home";
import Footer from "@/app/components/Footer";

function Main() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = sectionRef.current!.getBoundingClientRect();
      const windowHeight = window.innerHeight;


      setIsVisible(top < windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  
  



  return (
  <>

    <div>
      <h1>Chances we Introduced to the world</h1>
    </div>
    <section className="md:h-[500px] animate-fadeIn">
      <div className="flex md:flex-row relative md:right-40 flex-col md:h-[500px] w-full items-center justify-around gap-6 md:gap-0 mb-9 md:mb-0">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h1 id="hero" className="transition ease-in-out text-black text-center duration-500 md:text-7xl text-4xl">
            Redefining The <br /> <span className="text-[#E76E26]">Authentication</span>  
          </h1>
          <h1 className="text-[#423359] text-4xl text-center orange-border font-semibold experience-txt">"Experience our Award Winning Product"</h1>
          <p id="text1" className="text-black text-lg md:w-1/2 text-center mt-2 transition ease-in-out duration-500 mx-auto ">
            It involves using biometric security software to automatically recognise people based on their behavioural or biological characteristics.
          </p>
        </div>

        <div className="flex items-center justify-center z-20 ">
          {/* <img className="md:w-[400px] w-[300px]" src="/home-bg.jpg" alt="" /> */}
          {/* <Image
            src="/fingerprint.svg" // Path to your image
            alt="Description of the image"
            width={500} // Desired width of the image
            height={300} // Desired height of the image
          /> */}

          <MySVGComponent/>
        </div>
      </div>
    </section>

      <section className="md:h-screen md:mb-0 mb-6 flex items-center justify-center">
        <div className="flex md:flex-row flex-col gap-16 justify-center items-center">
          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/seamless.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Seamless Integration</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>

          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/biometric.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Multi model Biometric</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>

          <div className="z-10 text-black flex flex-col justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <img className='h-[100px]' src="/easy-access.svg" alt="" />
                <h3 className='text-xl font-semibold mt-9'>Easy to access</h3>
                <p className='font-light text-xs text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut </p>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className={`md:h-screen flex md:flex-row p-9 flex-col items-center justify-around ${isVisible ? 'animation' : ''}`}>
        <div className='md:w-[350px] md:h-[350px] w-[300px] h-[300px]' >
          <img className="rounded-full shadow-2xl" src="/aboutus-logo.png" alt="" />
        </div>
        <div className="md:mt-0 mt-[50px]">
          <h4 className='text-black font-semibold'>About Us</h4>
          <h1 className='text-4xl text-[#020329] font-semibold'>Transform Security With <br /> Biometric Recognition. It's Just A <br /> Click Away With <span className="text-[#FA975C]">Digital Fortress</span></h1>
          <p className='my-7 text-[#6A6A6C]'>Revolutionizing security with cutting-edge biometric solutions, Digital Fortress leads <br /> the way in authentication technology. Our innovations ensure unparalleled accuracy <br /> and reliability, empowering individuals and organizations with peace of mind </p>
          <button className='text-sm bg-[#423359] hover:bg-[#6f5b8d] px-14 py-4'>See Details</button>
        </div>
      </section>

      <section className={`md:h-[900px] md:mb-0 mb-9 bg-gradient-to-r from-[#F1F1F4]  to-[#DEDDEA]`}>
        <div className="flex p-7 flex-col items-center md:items-strech gap-8 text-black">
          <h4 className='text-black font-semibold text-center'>Our Products</h4>
          <h1 className='text-4xl text-[#020329] font-semibold text-center'>With Quality Products For You</h1>

          <div className="md:mt-6 flex flex-col justify-left gap-6">
            <div className="flex md:flex-row flex-col gap-6 w-full md:ml-[200px]">
              <div className="z-10 flex flex-col gap-9 justify-around items-center md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>Mukham</h3>
                <Image
                  className='h-[250px]'
                  src="/mukham.png" // Path to your image
                  alt="Description of the image"
                  width={250} // Desired width of the image
                  height={250} // Desired height of the image
                />
                <p className='font-light text-xs text-center'>Application to simplfy the overall process of marking attendance</p>
              </div>

              <div className="flex flex-col justify-around items-center gap-6 md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>MauthN</h3>
                <Image
                  className='h-[250px]'
                  src="/m-auth.svg" // Path to your image
                  alt="Description of the image"
                  width={100} // Desired width of the image
                  height={100} // Desired height of the image
                />
                <p className='font-light text-xs text-center mt-[15px]'>Admire the authentication
                <br />Passwordless authentication to remove risk of cyber attacks</p>
                {/* <p className='font-light text-xs text-center'></p> */}
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 md:ml-[500px]">
              <div className="z-10 flex flex-col justify-around items-center gap-7 md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services">
                <h3 className='text-xl font-semibold mt-9'>mXdr</h3>
                <Image
                  className='h-[250px]'
                  src="/mxdr.svg" // Path to your image
                  alt="Description of the image"
                  width={100} // Desired width of the image
                  height={100} // Desired height of the image
                />
                <p className='font-light text-xs text-center'>Extended detection and response</p>
              </div>

              <div className="flex flex-col justify-around items-center gap-7 md:w-[350px] w-[300px] h-[300px] bg-[#F6F6F8] p-9 shadow-services ">
                <h3 className='text-xl font-semibold mt-9'>M-Isolate</h3>
                <Image
                  className='h-[300px]'
                  src="/mIsolate.png" // Path to your image
                  alt="Description of the image"
                  width={200} // Desired width of the image
                  height={100} // Desired height of the image
                />
                <p className='font-light text-xs text-center'>Disposable Workspaces & <br /> Safest Web Browser in the World!</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Services Intro End */}

      {/* Services Anything Start */}
      <section className="h-[350px] w-full flex shadow-inset items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-[#E2F9F7] mb-9">
        <div className="flex flex-col items-center justify-center gap-7 text-black">
          <h1 className='font-semibold text-center text-3xl'>Anything to Discuss with Us?</h1>
          <p className='font-light text-center'>Ready to explore the future of security? Let's discuss your biometric solutions. Whether you have inquiries or <br />seek collaboration opportunities, we're here to elevate your security standards together.</p>
          <button className='text-sm text-white bg-[#423359] px-14 py-4'>Contact Us</button>
        </div>
      </section>

      <section className="flex flex-col pt-20 pb-36 justify-center items-center text-center gap-10 text-black ">
        <h1 className="font-semibold text-4xl">Contact Us?</h1>
        <p className="text-lg font-extralight">Reach out to us for inquiries. Support, or collaboration opportunities.</p>
        <button className='text-sm text-white bg-[#423359] hover:bg-[#6f5b8d] px-14 py-4'>Click here</button>
      </section>

      <Footer/>
</>
  );
}

export default Main;