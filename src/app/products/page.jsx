import Image from "next/image";
import { Container } from "@/components/Container";
import { ProductCards } from "@/components/ProductCards";
import MukhamUI from "@/images/MukhamUI.png";
import Verify from "@/images/verify.png";
import MauthIMG from '@/images/mauthn-main.png';
import { MAuthSvg } from "@/components/MAuthSvg";
import { FadeIn } from "@/components/FadeIn";
import AttendanceImg from '@/images/attendance.png';
import RightImg from '@/images/right-vector.svg';

function Product() {
    return (
        <>
          <ProductCards/>

          <Container className="mt-16">
            <FadeIn className="flex flex-col items-center justify-center md:flex-row gap-6">
              <div className="md:w-[600px] w-full">
                <h3 className="text-5xl font-bold">Mukham</h3>
                <p className="text-xl mt-6">Application integrated to remind and process the flow of marking attendance with simplified UI which takes <span className="text-orange-500">less than 10 seconds to mark attendance</span> </p>
                <div className="flex flex-col gap-4 mt-6 text-lg">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>AI-based Attendance System</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Geo Fencing</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Data Management</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>3D Maps</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={MukhamUI} // Path to your image
                  alt="Description of the image"
                  width={900} // Desired width of the image
                  height={900} // Desired height of the image
                />
              </div>
            </FadeIn>
          </Container>

          {/* Attendance */}
          <Container className="mt-16 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center md:flex-row gap-6 bg-[#2E3192] w-full mx-2 md:w-[1000px]  rounded-lg text-white p-4">
              <div className="md:w-[500px] w-full">
                <h3 className="text-5xl font-bold">Attendance <span className="text-[#D4611E]">Analytics</span></h3>
                <h3 className="text-3xl font-semibold mt-6">Get attendance details of each employee</h3>
              </div>
              <FadeIn>
                <Image
                  src={AttendanceImg} // Path to your image
                  alt="Description of the image"
                  width={400} // Desired width of the image
                  height={600} // Desired height of the image
                />
              </FadeIn>
            </div>
          </Container>

          <Container className="md:mt-16">
            <FadeIn className="flex flex-col items-center justify-center md:flex-row md:gap-9 gap-1">
              <div className="w-[400px] md:w-[500px]">
                {/* <MAuthSvg/> */}
                <Image
                  src={MauthIMG} // Path to your image
                  alt="Description of the image"
                  width={900} // Desired width of the image
                  height={900} // Desired height of the image
                />
              </div>
              <div className="md:w-[600px] w-full">
                <h3 className="text-5xl font-bold">MauthN</h3>
                <p className="text-xl mt-6">Remote authentication to provide flexibility of using any device for authentication with the security of multimodal and multifactor authentication </p>
                <div className="flex flex-col gap-4 mt-6 text-lg">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Advanced multifactor authentication for platform independent services</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Allowing user to use one or the combination of various passwordless authentication factors</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Allowing user to use one or the combination of various passwordless authentication factors</p>
                  </div>
                  {/* <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Data Management</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>3D Maps</p>
                  </div> */}
                </div>
              </div>
              
            </FadeIn>

          </Container>

          {/* <Container className="mt-16">
            <FadeIn className="flex flex-col items-center justify-center md:flex-row gap-6">
              <div className="md:w-[600px] w-full">
                <h3 className="text-5xl font-bold">mIsolate</h3>
                <p className="text-xl mt-6">With M-Isolate Workspaces, users gain the freedom to open any email attachment without fear of getting hacked. The platform ensures secure email interactions, mitigating the risk of phishing attacks and unauthorized access through attachments. <br /> <br />
                Users can browse and interact with the digital world without compromising the security of their endpoints. </p>
                <div className="flex flex-col gap-4 mt-6 text-lg">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Agentless Security</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Flexible and Customizable</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Open-Source Foundations</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Complete Endpoint Protection</p>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={MukhamUI} // Path to your image
                  alt="Description of the image"
                  width={900} // Desired width of the image
                  height={900} // Desired height of the image
                />
              </div>
            </FadeIn>
          </Container> */}

          {/* <Container className="mt-16">
            <FadeIn className="flex flex-col items-center justify-center md:flex-row gap-6">
              <div>
                <Image
                  src={MukhamUI} // Path to your image
                  alt="Description of the image"
                  width={900} // Desired width of the image
                  height={900} // Desired height of the image
                />
              </div>
              <div className="md:w-[600px] w-full">
                <h3 className="text-5xl font-bold">mXdr</h3>
                <p className="text-xl mt-6">Application integrated to remind and process the flow of marking attendance with simplified UI which takes <span className="text-orange-500">less than 10 seconds to mark attendance</span> </p>
                <div className="flex flex-col gap-4 mt-6 text-lg">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>AI-based Attendance System</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Geo Fencing</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>Data Management</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image
                      src={Verify} // Path to your image
                      alt="Description of the image"
                      width={25} // Desired width of the image
                      height={25} // Desired height of the image
                    />
                    <p>3D Maps</p>
                  </div>
                </div>
              </div>
              
            </FadeIn>
          </Container> */}

          <Container className="mt-16">
            <FadeIn className="flex flex-col items-center justify-center gap-6">
              <div className="mb-5">
                <h3 className="text-5xl font-bold">Choose <span className="text-[#D4611E]">your </span> plan</h3>
              </div>

              <div className="flex md:flex-row flex-col gap-4 items-end">
                <div className="bg-[#D4611E] h-[330px] rounded-lg p-4 text-white shadow">
                  <h3 className="font-semibold text-2xl">Free Trial</h3>
                  <h3 className="font-bold text-3xl">$0</h3>
                  <p className="mb-4">The perfect way to get started</p>
                  <hr />
                  <div className="flex flex-col gap-4 mt-6 text-md">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Upto 2 users</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>No support</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Limited statistic</p>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">START TRIAL</button>
                  </div>
                </div>

                <div className="bg-[#D4611E] h-[370px] rounded-lg p-4 text-white shadow">
                  <h3 className="font-semibold text-2xl">Premium</h3>
                  <h3 className="font-bold text-3xl">$49</h3>
                  <p className="mb-4">The perfect way to get started</p>
                  <hr />
                  <div className="flex flex-col gap-4 mt-6 text-md">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Upto 2 users</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>No support</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Limited statistic</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Limited statistic</p>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">GET STARTED</button>
                  </div>
                </div>

                <div className="bg-[#D4611E] h-[330px] rounded-lg p-4 text-white shadow">
                  <h3 className="font-semibold text-2xl">Supreme</h3>
                  <h3 className="font-bold text-3xl">$0</h3>
                  <p className="mb-4">The perfect way to get started</p>
                  <hr />
                  <div className="flex flex-col gap-4 mt-6 text-md">
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Upto 2 users</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>No support</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={RightImg} // Path to your image
                        alt="Description of the image"
                        width={20} // Desired width of the image
                        height={20} // Desired height of the image
                      />
                      <p>Limited statistic</p>
                    </div>
                  </div>
                  <div>
                    <button className="w-full bg-white text-black rounded-md mt-3 mb-2 py-1">START TRIAL</button>
                  </div>
                </div>
              </div>
               
            </FadeIn>
          </Container>

        </>
    )
};

export default Product;