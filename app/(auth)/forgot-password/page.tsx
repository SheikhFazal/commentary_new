"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/reset-password");
  };
  return (
    <div className="lg:col-span-5 md:col-span-6 col-span-12 py-16 lg:px-16 md:px-12 px-8 bg-[#11151E]">
      <div className="">
        <p className="text-4xl pb-32 pt-14 text-center">Forgot Password</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="email"
          placeholder="Email"
          required
          value={email}
          type="email"
        />
        <button
          type="submit"
          className="py-[15px] font-semibold text-lg px-8 rounded-full w-full bg-[#001BFF]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
