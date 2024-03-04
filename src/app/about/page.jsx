import React from "react";
import Image from "next/image";
import MukhamImg from "@/images/attendance.png";
import AboutImg2 from "@/images/about2.png";
import AboutImg3 from "@/images/about3.png";
import AboutImg4 from "@/images/about4.png";
import AboutImgMain from "@/images/about-main.svg";
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
            src={MukhamImg}
            width={400}
            height={470}
          />

          <Image
            className="mt-4"
            src={AboutImg2}
            width={380}
            height={430}
          />

          <Image
            className="mt-4"
            src={AboutImg3}
            width={400}
            height={430}
          />

          <Image
            className="mt-4"
            src={AboutImg4}
            width={380}
            height={450}
          />
        </div>
      </Container>
      
      <Container className="mt-16 flex items-center justify-center">
        <div className="md:w-[800px] w-[450px] flex flex-col gap-5 items-center justify-center">
          <div className="flex items-center justify-center h-[240px] gap-5 md:w-[800px] w-[450px]">
            <FadeIn className="flex flex-col gap-5">
              <div className="flex items-center justify-center flex-1 rounded bg-[#E5E5E5] md:w-[300px] w-[140px] h-[110px] py-8">
                <h3 className="md:text-3xl text-xl">Our Mission</h3>
              </div>
              <div className="flex items-center justify-center flex-1 rounded bg-[#E5E5E5] md:w-[300px] w-[140px] h-[110px] py-8">
                <h3 className="md:text-3xl text-xl">Our Vision</h3>
              </div>
            </FadeIn>
            <FadeIn className="flex items-center justify-center px-6 rounded bg-orange-400 md:h-full h-[210px] md:w-[600px] w-[170px]">
              <h3 className="text-5xl font-bold text-center">Our Story</h3>
            </FadeIn>
          </div>

          <div className="flex gap-5">
            <div className="md:w-[550px] w-[327px] bg-[#E5E5E5] p-6 rounded">
              <h3 className="text-3xl">Our Story</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, asperiores nulla odit laboriosam at voluptate odio amet? Eum minus itaque quos numquam inventore, minima consectetur voluptatem possimus eius amet incidunt aperiam porro aspernatur fugiat repellendus, suscipit dignissimos ex? Nulla, eveniet? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus culpa nesciunt ad maiores illum architecto sed. Quam impedit facere, laborum beatae fugiat alias maiores natus expedita ullam, asperiores autem recusandae.</p>
            </div>
            <div className="w-[250px] md:block hidden">
              <Image
              src={AboutImgMain}
              width={250}
              height={300}
              />
            </div>
          </div>
        </div>
      </Container>

      <Team />
    </div>
  );
}

export default About;
