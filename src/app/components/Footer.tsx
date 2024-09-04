import React from 'react'

const Footer = () => {
  return (
    <>
      {/* Footer Section Start */}
      <section className="">

        <div className="text-white footer-main bg-[#FA975C] p-10 w-full flex flex-col items-center">

          <div className="flex md:flex-row flex-col  justify-around p-3 w-full">
            <div className="flex flex-col items-center justify-center md:mb-0 mb-6 gap-6">
              <p>Follow us on Socials</p>
              <div className='flex gap-4'>
                <img src="/insta.png" alt="" className="h-5 w-5" />
                <img src="/twitter-256.png" alt="" className="h-5 w-5" />
                <img src="/linkedin-256.png" alt="" className="h-5 w-5" />
                <img src="/facebook-256.png" alt="" className="h-5 w-5" />
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-9 ">
              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Our Products</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li><a className='text-base' href="#">Mukham</a></li>
                  <li><a className='text-base' href="#">MauthN</a></li>
                  <li><a className='text-base' href="#">mXdr</a></li>
                  <li><a className='text-base' href="#">mIsolate</a></li>
                </ul>
              </div>

              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Page</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li><a className='text-base' href="#">About Us</a></li>
                  <li><a className='text-base' href="#">Our Team</a></li>
                  <li><a className='text-base' href="#">Pricing</a></li>
                  <li><a className='text-base' href="#">Our Blog</a></li>
                </ul>
              </div>

              <div className="flex flex-col text-white gap-3 mx-4">
                <h3 className='text-2xl font-semibold'>Contact Us</h3>
                <ul className='flex flex-col gap-2.5'>
                  <li className='text-base flex gap-3'><img src="/mobile-phone-8-256.png" alt="" className="h-5 w-5" />&nbsp;+91 9585583918</li>
                  <li className='text-base flex gap-3'><img src="/mail-256.png" alt="" className="h-5 w-5" />&nbsp;sibi@digitalfortress.in</li>
                  <li className='text-base flex gap-3'><img src="/pin-8-256.png" alt="" className="h-5 w-5" />&nbsp;VTBIF, VIT AP University</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-base w-5/6 text-center">
            <br />
            <hr />
            <br />
            <p>All rights reserved</p>
          </div>
        </div>
      </section>
      {/* Footer Section End */}
    </>
  )
}

export default Footer;