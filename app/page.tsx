"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Home = () => {
  const router = useRouter();

  const goToNavbar = () => {
    router.push("/navbar");
  };
  const goToAbout = () => {
    router.push("/about");
  };

  const goToContact = () => {
    router.push("/contact");
  };
  const goToFooter = () => {
    router.push("/footer");
  };
  return (
    <>
      <h1 className="text-3xl">Home page</h1>
      <Link href={"/navbar"}> go to Navbar</Link>
      <br />
      <Link href={"/about"}> go to About </Link>
      <br />
      <Link href={"/contact"}> go to Contact </Link>
      <br />
      <Link href={"/footer"}> go to Footer</Link>
      <br />

      <button
        className="px-2 py-0 mx-2 my-2  bg-gray-500 text-white border-none rounded cursor-pointer"
        onClick={goToNavbar}>Navbar btn</button>
      
      <button
        className="px-2 py-0 mx-2 my-2 bg-gray-500 text-white border-none rounded cursor-pointer"
        onClick={goToAbout}>About btn</button>
      
      <button
        className="px-2 py-0 mx-2 my-2 bg-gray-500 text-white border-none rounded cursor-pointer"
        onClick={goToContact}>Contact btn</button>
      
      <button
        className="px-2 py-0 mx-2 my-2 bg-gray-500 text-white border-none rounded cursor-pointer"
        onClick={goToFooter}>Footer btn</button>
    </>
  );
};

export default Home;
