"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignUp = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/sign-up/few-steps");
  };
  return (
    <div className="lg:col-span-5 md:col-span-6 col-span-12 py-16 lg:px-16 md:px-12 px-8 bg-[#11151E]">
      <div className="">
        <p className="text-4xl pt-8 pb-20 font-semibold text-center">Sign Up</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <input
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="fullName"
          placeholder="Full Name"
          required
          onChange={(e) => handleChange(e)}
          value={formValue?.fullName}
          type="text"
        />
        <input
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="email"
          placeholder="Email"
          required
          onChange={(e) => handleChange(e)}
          value={formValue?.email}
          type="email"
        />
        <input
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="phone"
          placeholder="Phone Number"
          required
          onChange={(e) => handleChange(e)}
          value={formValue?.phone}
          type="number"
        />
        <input
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="password"
          placeholder="Password"
          required
          onChange={(e) => handleChange(e)}
          value={formValue?.password}
          type="password"
        />
        <div className="flex justify-end my-5">
          <p className="text-[#3F495F] text-sm">
            By clicking Sign Up, you are agreeing to our Terms of Services, are
            acknowledging our Privacy Notice and the EU, EEA & UK Consumer Right
            of Withdrawal Information.
          </p>
        </div>
        <button
          type="submit"
          className="py-[15px] font-semibold text-lg px-8 rounded-full w-full bg-[#001BFF]"
        >
          Next
        </button>
      </form>
      <div className="grid grid-cols-12 flex items-center gap-4 my-16">
        <div className="col-span-5 border border-[#3F495F] "></div>
        <span className="col-span-2 text-xs text-center w-[14]">
          Or Login Via
        </span>
        <div className="col-span-5 border border-[#3F495F] "></div>
      </div>
      <div className="my-7 flex justify-center md:flex-nowrap flex-wrap gap-3">
        <button className="py-[15px] font-semibold text-lg px-8 rounded-full flex items-center justify-center gap-3 w-full bg-[#222938]">
          <Image
            src="/google-white-icon.png"
            alt="Google"
            height="20"
            width="20"
          />
        </button>
        <button className="py-[15px] font-semibold text-lg px-8 rounded-full flex items-center justify-center gap-3 w-full bg-[#222938]">
          <Image src="/fb-white-icon.png" alt="Google" height="10" width="10" />
        </button>
        <button className="py-[15px] font-semibold text-lg px-8 rounded-full flex items-center justify-center gap-3 w-full bg-[#222938]">
          <Image
            src="/apple-white-icon.png"
            alt="Google"
            height="15"
            width="15"
          />
        </button>
      </div>
      <div className="pt-24 pb-5">
        <p className="text-lg text-center">
          Already have an account?{" "}
          <button
            className="text-[#001BFF] font-semibold"
            onClick={() => router.push("/sign-in")}
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
