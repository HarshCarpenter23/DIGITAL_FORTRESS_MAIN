import React from "react";
import Image from "next/image";
import MukhamImg from "@/images/attendance.png";
import AboutImg2 from "@/images/about2.png";
import AboutImg3 from "@/images/about3.png";
import AboutImg4 from "@/images/about4.png";
import AboutImgMain from "@/images/story.png";
import { PageIntro } from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import imageWhitneyFrancis from "@/images/team/whitney-francis.jpeg";
import Team from "@/components/Team";
import clsx from "clsx";
import { FadeIn } from "@/components/FadeIn";

function Container({ as: Component = "div", className, children }) {
  return (
    <Component className={clsx("mx-auto max-w-7xl px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  );
}

const mockups = [
  imageWhitneyFrancis,
  imageWhitneyFrancis,
  imageWhitneyFrancis,
  imageWhitneyFrancis,
];

function About() {
  return (
    <div>
      <PageIntro
        eyebrow="About us"
        title="Experience the Power of Passwordless Authentication"
      >
        <p>
          Say goodbye to passwords and protect your digital identity with our
          cutting-edge Passwordless Authentication solution. With our innovative
          technology, you can enjoy a secure and hassle-free login experience.
        </p>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>

      <Container className="mt-16">
        <div className="flex md:flex-row flex-col items-center justify-center gap-6 md:gap-9">
          <Image
            className="mt-4"
            src={MukhamImg}
            width={200}
            height={300}
          />

          <Image
            className="mt-4"
            src={AboutImg2}
            width={200}
            height={300}
          />

          <Image
            className="mt-4"
            src={AboutImg3}
            width={200}
            height={300}
          />

          <Image
            className="mt-4"
            src={AboutImg4}
            width={200}
            height={300}
          />
        </div>
      </Container>
      
      <Container className="mt-16 flex items-center justify-center">
        <div className="md:w-[900px] w-[450px] flex flex-col gap-5 items-center justify-center">
          <div className="flex items-center justify-center h-[220px] gap-5 md:w-[900px] w-[500px]">
            <FadeIn className="flex flex-col gap-5">
              <div className="flex items-center justify-center flex-1 rounded bg-[#E5E5E5] md:w-[310px] w-[180px] h-[150px] py-8">
                <h3 className="md:text-3xl text-xl">Our Mission</h3>
              </div>
              <div className="flex items-center justify-center flex-1 rounded bg-[#E5E5E5] md:w-[310px] w-[180px] h-[150px] py-8">
                <h3 className="md:text-3xl text-xl">Our Vision</h3>
              </div>
            </FadeIn>
            <FadeIn className="flex items-center justify-center px-6 rounded bg-orange-400 md:h-[240px] h-[200px] md:w-[600px] w-[170px]">
              <h3 className="text-5xl font-bold text-center">Our Story</h3>
            </FadeIn>
          </div>

          <div className="flex gap-5 md:w-[900px] w-[400px]">
            <div className="md:w-[550px] md:h-[700px] h-[920px] w-[400px] bg-[#E5E5E5] p-6 rounded">
              <h3 className="text-3xl">Our Story</h3>
              <p>Our company, DigitalFortress Private Limited, is poised for substantial growth due to the innovative and high-impact nature of our products, MAuthN and Mukham. MAuthN introduces a revolutionary approach to authentication by eliminating traditional passwords and implementing passwordless multi-factor authentication. It ensures robust identity verification through advanced cryptographic techniques, device attestation, and biometrics, thereby mitigating cyber threats and unauthorized access. Mukham, on the other hand, offers state-of-the-art employee monitoring, streamlining workforce management with features such as facial recognition-based attendance tracking, geo-fencing, an anti-spoofing module, and an AI secretary. The compelling reasons behind our company's high growth potential lie in the fact that both products directly address pressing market demands, such as enhanced cybersecurity and operational efficiency, while ensuring a user-friendly experience. Our adaptability to emerging technologies, comprehensive control, data-driven insights, and competitive advantages further bolster our position in the market, making us the preferred choice for businesses across various industries. We are confident that our commitment to innovation and security will continue to drive our growth and success in the digital realm</p>
            </div>
            <div className="w-[365px] h-[700px] md:block hidden">
              <Image
              className="rounded"
              src={AboutImgMain}
              width={365}
              height={700}
              />
            </div>
          </div>
        </div>
      </Container>

      {/* <Team /> */} 
    </div>
  );
}

export default About;
