'use client'
import { ArrowIcon } from "@/components/Footer";
import React from "react";


export function NewsletterForm() {
  return (
    <form
      className="max-w-md"
      onSubmit={function handleSubmit(e) {
        console.log(e);
      }}
    >
      <p className="mt-4 text-sm text-neutral-700 w-full text-center">
        Subscribe to get the latest updates, articles and resources
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


function Blog() {
  return (
    <div className="flex w-full h-[80vh] justify-center items-center flex-col">
      <h1 className=" text-5xl font-semibold">Coming Soon...</h1>
      <NewsletterForm/>
    </div>
  );
}

export default Blog;
