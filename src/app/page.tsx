"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

import Main from "./Pages/Main/pages";
import AboutUs from "./Pages/AboutUs/pages";
import Services from "./Pages/Products/pages";
import ContactUs from "./Pages/ContactUs/pages";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('Main'); // Initial page is Main

  const handleNavigation = (page: string) => {
    setCurrentPage(page); // Set the current page based on the clicked button
    router.push('/'); // Navigate to the home page
  };

  // Render the current page component based on currentPage state
  const renderPage = () => {
    switch(currentPage) {
      case 'Main':
        return <Main />;
      case 'AboutUs':
        return <AboutUs />;
      case 'Products':
        return <Services />;
      case 'ContactUs':
        return <ContactUs />;
      default:
        return <Main />; // Default to Main page
    }
  };

  return (
    <main>
      <header className="p-4">
        <div className="flex md:flex-row flex-col md:text-base text-base justify-between items-center py-5 px-9 bg-white md:rounded-full rounded-lg shadow">
          <div className="w-[140px]">
            <img src="/logo.svg" alt="" />
          </div>
          <div className="flex text-base text-black md:mt-0 mt-6 gap-9">
            <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("Main")}>Home</button>
            <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("AboutUs")}>About Us</button>
            <button className="hover:text-indigo-900 hover:font-semibold" onClick={() => handleNavigation("Products")}>Products</button>
            
          </div>
          <div className="flex justify-center items-center">
          <button className="bg-[#423359] px-6 py-1 md:mt-0 mt-6 md:py-4 text-white hover:text-[#f1f1f1] md:rounded-full rounded-md" onClick={() => handleNavigation("ContactUs")}>Contact Us</button>
          </div>
        </div>
      </header>
      {renderPage()} {/* Render the current page component */}
    </main>
  );
}
