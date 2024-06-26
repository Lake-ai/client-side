"use client";

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { Auth } from "../api/apiCall";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [User, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...User,
      [event.target.name]: event.target.value,
    });
  };

  console.log(User)
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    setisLoading(true);
    console.log("user",User)
    const res = await axios.post("http://localhost:8001/signin", User);
    console.log("res",res)
    setisLoading(false);
    if (res?.data?.status != "Failed") {
      localStorage.setItem('UserId',res?.data?.id)
      toast("Organization Submitted !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/dashboard");
    } else {
      toast.error("Failed to Login !", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-opacity-50 sm:pt-24 pt-30">
        <form
          onSubmit={handleSubmit}
          className="p-8 bg-white rounded-lg shadow-xl w-96 bg-opacity-10"
          style={{ backdropFilter: "blur(4px)" }}
        >
          <div className="text-gray-950 flex justify-center text-2xl">
            Log In
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">UserName</label>
            <input
              type="text"
              name="username"
              required
              minLength={6}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none focus:border-pink-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              required
              minLength={6}
              maxLength={12}
              onChange={handleChange}
              title="Please enter a 10-digit mobile number"
              className="mt-1 w-full px-4 py-2 rounded-md border bg-opacity-50 bg-pink-50 border-gray-300 focus:outline-none  focus:border-pink-500"
            />
          </div>
          {isLoading ? (
            <button
              disabled
              className="w-full flex justify-center py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700"
            >
              <AiOutlineLoading3Quarters className="animate-spin" />
            </button>
          ) : (
            <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700">
              Submit
            </button>
          )}
          <p className="font-sans font-normal flex justify-center p-2">
            Create An Account{" "}
            <Link
              href="/sign-up"
              className="text-sky-500 underline italic pl-2"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Page;
