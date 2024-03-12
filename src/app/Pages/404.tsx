export default function Custom404() {
  return (
    <>
      <div className="h-screen text-black flex flex-col gap-6 items-center justify-center">
        <img className='md:w-[700px] w-[300px]' src="/404.svg" alt="" />
        <h1 className='text-3xl font-semibold'>This page is not found</h1>
        <p className='text-3xl font-semibold'>OOPS...Try Again :/</p>
        <a href="/" className="bg-[#4E3F63] px-9 py-4 text-white font-semibold">Home Page</a>
      </div>
    </>
    )
}
