import logo from '@/app/assets/Logo.svg'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='text-black flex justify-between items-center h-22 py-3 px-20 nav sticky top-0 z-50'>
      <a href='/'>
        <Image src={logo} height={79} width={272} alt='logo' className='object-cover' />
      </a>
      
      {/* desktop */}
      <div className='md:flex flex-row gap-10 justify-between items-center mr-20 sm:hidden'>
        <a className='focus:font-bold ' href='/'>Home</a>
        <a href='/AboutUs' className="focus:font-bold active:font-semibold">About</a>
        <a className='focus:font-semibold active:font-semibold' href='/Services'>Services</a>
        <a href='/ContactUs'>Contact us</a>
      </div>

      {/* mobile */}
      <div className='sm:flex md:hidden'></div>
    </div>
  )
}

export default Nav