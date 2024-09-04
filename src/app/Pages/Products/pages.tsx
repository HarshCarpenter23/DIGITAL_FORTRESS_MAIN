// Import the necessary libraries
"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Footer from '@/app/components/Footer';


function Services() {

  return (
    // Services section with a full height background
    <>



      {/* Services Head Start */}
      {/* <section className="h-screen text-black flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <h1 className='text-4xl font-semibold'>Our Services</h1>
          <p className='px-12 text-center text-lg font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non</p>
        </div>
      </section> */}
      {/* Services Head End */}

      {/* Services Intro Start */}
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
      {/* Services Anything End */}


      {/* Services Testimonials Start */}
      {/* <section ref={sectionRef} className={`md:h-screen ${isVisible ? 'animation' : ''}`}>
        <div className="flex md:flex-row flex-col items-center justify-center gap-[150px]">
          <div className="md:w-[450px] w-[300px] md:h-[300px] h-[260px] bg-[#ccc]">
            <img src="/testimonials.png" alt="" />
          </div>
          <div className="md:w-[500px] w-full text-black p-7">
            <h4 className='font-semibold text-sm text-black'>Testimonials</h4>
            <h1 className='text-4xl my-2 font-semibold '>Hello World, Welcome to <br /> <span className="text-[#FA975C]">Digital Fortress</span></h1>
            
            <p className='font-light text-xs my-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat. Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut nulla. Et consectetur venenatis vulputate aliquet gravida eget non. Nec aliquam dui morbi viverra. Arcu viverra augue tincidunt massa quam bibendum. <br /><br />Pharetra, in elementum mattis duis felis. In malesuada nisi, tincidunt ultrices tempus in tellus at sed. Rutrum est, lacus orci id convallis nibh ac. Justo dignissim eget cras aliquam, eu duis consectetur. Nunc quam sed tellus neque. Vitae mi magna gravida pretium dui. Porttitor ac eget urna egestas faucibus adipiscing </p>

            <p className='font-semibold text-base'>Name-Position</p>
          
          </div>
        </div>
      </section> */}
      {/* Services Testimonials End */}


      <Footer/>

    
    </>
  );
}

// Export the Services component
export default Services;
