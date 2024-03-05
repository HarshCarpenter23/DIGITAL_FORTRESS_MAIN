import Image from "next/image";
import { Container } from "@/components/Container";
import MukhamImg from "@/images/mukham.png";
import MIsolateImg from "@/images//mIsolate.png"
import MxdrImg from "@/images/mxdr.svg";
import MauthNImg from "@/images/m-auth.svg"
import { FadeIn } from "@/components/FadeIn";

export function ProductCards() {
    return (

            <Container className={`md:mb-0 mb-9 `}>
                <FadeIn className="flex p-7 flex-col items-center md:items-strech gap-8 text-black">
                    <h4 className='text-black font-semibold text-center'>Our Products</h4>
                    <h1 className='flex justify-center items-center gap-3 text-4xl text-black font-semibold text-center'><hr className="w-[120px]"/>With Quality Products For You<hr className="w-[120px]"/></h1>
                </FadeIn>
            </Container>
                // {/* <div className="md:mt-6 flex flex-col justify-left gap-6">
                //     <div className="flex md:flex-row flex-col gap-6 w-full md:ml-[200px]">
                //     <div className="z-10 flex flex-col gap-9 justify-around items-center md:w-[350px] w-[300px] h-[300px] p-9 shadow-services">
                //         <h3 className='text-xl font-semibold mt-9'>Mukham</h3>
                //         <Image
                //         className='h-[250px]'
                //         src={MukhamImg} // Path to your image
                //         alt="Description of the image"
                //         width={250} // Desired width of the image
                //         height={250} // Desired height of the image
                //         />
                //         <p className='font-light text-sm text-center'>Application to simplfy the overall process of marking attendance</p>
                //     </div>

                //     <div className="flex flex-col justify-around items-center gap-6 md:w-[350px] w-[300px] h-[300px] p-9 shadow-services">
                //         <h3 className='text-xl font-semibold mt-9'>MauthN</h3>
                //         <Image
                //         className='h-[250px]'
                //         src={MauthNImg} // Path to your image
                //         alt="Description of the image"
                //         width={100} // Desired width of the image
                //         height={100} // Desired height of the image
                //         />
                //         <p className='font-light text-sm text-center mt-[15px]'>Admire the authentication
                //         <br />Passwordless authentication to remove risk of cyber attacks</p>
                //         {/* <p className='font-light text-xs text-center'></p> */}
                //     </div>
                //     </div> */}

                //     {/* <div className="flex md:flex-row flex-col gap-6 md:ml-[500px]">
                //     <FadeIn className="z-10 flex flex-col justify-around items-center gap-7 md:w-[350px] w-[300px] h-[300px] p-9 shadow-services">
                //         <h3 className='text-xl font-semibold mt-9'>mXdr</h3>
                //         <Image
                //         className='h-[250px]'
                //         src={MxdrImg} // Path to your image
                //         alt="Description of the image"
                //         width={100} // Desired width of the image
                //         height={100} // Desired height of the image
                //         />
                //         <p className='font-light text-sm text-center'>Extended detection and response</p>
                //     </FadeIn>

                //     <FadeIn className="flex flex-col justify-around items-center gap-7 md:w-[350px] w-[300px] h-[300px] p-9 shadow-services ">
                //         <h3 className='text-xl font-semibold mt-9'>M-Isolate</h3>
                //         <Image
                //         className='h-[300px]'
                //         src={MIsolateImg} // Path to your image
                //         alt="Description of the image"
                //         width={200} // Desired width of the image
                //         height={100} // Desired height of the image
                //         />
                //         <p className='font-light text-sm text-center'>Disposable Workspaces & <br /> Safest Web Browser in the World!</p>
                //     </FadeIn>
                //     </div> */}

                   
       
    )
}