import React from "react";
import Footerimage from "../images/footer.png";
import Image from "next/image";
import { SocialMedia } from "./SocialMedia";
import { socialMediaProfiles } from "@/components/SocialMedia";
import { FadeIn } from "./FadeIn";
import Link from "next/link";

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
}

function NewsletterForm() {
  return (
    <form
      className="max-w-sm"
      onSubmit={function handleSubmit(e) {
        console.log(e);
      }}
    >
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest Tech news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          name="newsletter-email"
          id="newsletter-email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
}

const navigation = [
    {
        title: "Connect",
        links: socialMediaProfiles,
    },
    {
      title: "Company",
      links: [
        { title: "About", href: "/about" },
        { title: "products", href: "/products" },
        { title: "Blog", href: "/blog" },
        { title: "Contact us", href: "/contact" },
      ],
    }
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer class="bg-gray-50 lg:grid lg:grid-cols-5 mt-20">
      <div class="relative block h-32 lg:col-span-2 lg:h-full">
        <Image
          src={Footerimage}
          alt="mockup"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <Navigation />
            <div className="flex lg:justify-end">
              <NewsletterForm />
            </div>
          </div>
        </FadeIn>

        <div class="mt-12 border-t border-gray-100 pt-12">
          <div class="sm:flex sm:items-center sm:justify-between">
            <ul class="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" class="text-gray-500 transition hover:opacity-75">
                  Cookies
                </a>
              </li>
            </ul>

            <p class="mt-8 text-xs text-gray-500 sm:mt-0">
              &copy; 2023. digitalfortress.in . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
