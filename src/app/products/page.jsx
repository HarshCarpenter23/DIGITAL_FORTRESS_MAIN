import Image from "next/image";
import { Container } from "@/components/Container";
import { ProductCards } from "@/components/ProductCards";
import MukhamUI from "@/images/MukhamUI.png";
import Verify from "@/images/verify.png";
import { MAuthSvg } from "@/components/MAuthSvg";
import { FadeIn } from "@/components/FadeIn";

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
                    <p>Passwordless Authentication</p>
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

          <Container className="md:mt-16">
            <FadeIn className="flex flex-col items-center justify-center md:flex-row md:gap-9">
              <div className="w-[400px] md:w-[500px]">
                <MAuthSvg/>
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
        </>
    )
};

export default Product;