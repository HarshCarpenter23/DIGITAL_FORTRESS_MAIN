// Import the necessary libraries
"use client";
import React, { useState } from 'react';  
import Image from 'next/image';
import Footer from '@/app/components/Footer';
 
  function ContactUs() {

    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: ''
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      // Handle form submission logic here
      console.log(formData);
    };

  return (
    <>
      {/* Contact Head Start */}
       {/* <section className="bg-gradient-to-r from-green-300 to-blue-300 h-screen text-black flex items-center justify-center">
        <div className="flex flex-col gap-4 justify-center items-center w-100">
          <h1 className='text-4xl font-semibold'>Contact US</h1>
          <p className='text-lg font-light text-center'>Reach us out for inquiries, support or collaboration opportunities.</p>
        </div>
      </section>  */}
      {/* Contact Head End */}

      {/* Contact Form Start */}
        <section className="h-screen">
          <div className="flex p-9 md:flex-row items-center justify-evenly gap-7 md:h-screen flex-col text-black">
            <div className="">
              <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <div className="w-1/2 mr-2">
                      <label htmlFor="firstName" className="block text-base font-medium text-gray-700">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="mt-1 p-2 block w-full shadow-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label htmlFor="lastName" className="block text-base font-medium text-[#555555]">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 block w-full shadow-2xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-1/2 mr-2">
                      <label htmlFor="phone" className="block text-base font-medium text-[#555555]">Your Phone</label>
                      <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 block w-full shadow-2xl  border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label htmlFor="email" className="block text-base font-medium text-[#555555]">Your Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full shadow-2xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-base font-medium text-[#555555]">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="mt-1 p-2 block w-full shadow-2xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
                <div className="mt-6">
                  <button type="submit" className="text-white px-9 py-4 bg-[#423359] hover:bg-[#6f5b8d]">Send Message</button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-6">
              <h1 className='text-4xl font-semibold'>Need More Help?</h1>
              <ul className='flex flex-col gap-3'>
                  <li className='text-base flex gap-3'><Image
                  className="h-5 w-5"
        src="/pngegg.png" // Path to your image
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />&nbsp;+91 9585583918</li>
                  <li className='text-base flex gap-3'><Image
                  className="h-5 w-5"
        src="/mess.png" // Path to your image
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />&nbsp;sibi@digitalfortress.in</li>
                  <li className='text-base flex gap-3'><Image
                  className="h-5 w-5"
        src="/location-pin.png" // Path to your image
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />&nbsp;VTBIF, VIT AP University</li>
                </ul>

            </div>
          </div>
        </section>
      {/* Contact Form End */}

      {/* Map Start */}
        <section className='md:h-screen flex w-full items-center justify-center' >
          <div>
            <h3 className='text-4xl font-semibold text-center text-black mb-9'>Map</h3>
            <Image
        src="/map.svg" // Path to your image
        className='md:w-[500px] w-[300px] md:mb-0 mb-6'
        alt="Description of the image"
        width={500} // Desired width of the image
        height={300} // Desired height of the image
      />
          </div>
        </section>
      {/* Map End */}

      {/* Footer Section Start */}
       <Footer/>
      {/* Footer Section End */}
    </>
  );
}

// Export the ContactUs component
export default ContactUs;
