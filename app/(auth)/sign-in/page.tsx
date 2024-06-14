"use client";
import useUserStore from "@/store/use-store-user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const credentials = {
  admin: {
    email: "admin@example.com",
    password: "admin123",
    username: "Admin",
    role: "ADMIN",
  },
  commentator: {
    email: "commentator@example.com",
    password: "commentator123",
    username: "John Smith",
    role: "COMMENTATOR",
  },
  user: {
    email: "user@example.com",
    password: "user123",
    username: "John User",
    role: "USER",
  },
};
const SignIn = () => {
  const setUser = useUserStore((state: any) => state.setUser);

  const router = useRouter();
  const [formValue, setFormValue] = useState({
    email: "",
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
    const { email, password } = formValue;

    // Validate credentials
    if (
      email === credentials.admin.email &&
      password === credentials.admin.password
    ) {
      toast.success("Login successfully!");
      setUser(credentials.admin);
      router.push("/dashboard");
    } else if (
      email === credentials.commentator.email &&
      password === credentials.commentator.password
    ) {
      toast.success("Login successfully!");
      setUser(credentials.commentator);
      router.push("/streams");
    } else if (
      email === credentials.user.email &&
      password === credentials.user.password
    ) {
      toast.success("Login successfully!");
      setUser(credentials.user);
      router.push("/");
    } else {
      toast.error("Invalid email or password");
    }
  };
  return (
    <div className="lg:col-span-5 md:col-span-6 col-span-12 py-16 lg:px-16 md:px-12 px-8 bg-[#11151E]">
      <div className="">
        <p className="text-4xl pb-32 pt-14 text-center">
          Hey there,👏 <br /> <span className="font-bold">welcome back</span>
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <input
          onChange={(e) => handleChange(e)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="email"
          placeholder="Email"
          required
          value={formValue?.email}
          type="email"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="password"
          placeholder="Password"
          required
          value={formValue?.password}
          type="password"
        />
        <div className="flex justify-end my-5">
          <button
            onClick={() => router.push("/forgot-password")}
            type="button"
            className="text-sm underline text-[#001BFF]"
          >
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="py-[15px] font-semibold text-lg px-8 rounded-full w-full bg-[#001BFF]"
        >
          Login
        </button>
      </form>
      <div className="grid grid-cols-12 flex items-center gap-4 my-16">
        <div className="col-span-5 border border-[#3F495F] "></div>
        <span className="col-span-2 text-xs text-center w-[14]">
          Or Login Via
        </span>
        <div className="col-span-5 border border-[#3F495F] "></div>
      </div>
      <div className="my-7">
        <button className="py-[15px] font-semibold text-lg px-8 rounded-full flex items-center justify-center gap-3 w-full bg-[#222938]">
          <Image
            src="/google-white-icon.png"
            alt="Google"
            height="20"
            width="20"
          />
          Login With Google
        </button>
      </div>
      <div className="pt-24 pb-5">
        <p className="text-lg text-center">
          Don’t have an account?{" "}
          <button
            className="text-[#001BFF] font-semibold"
            onClick={() => router.push("/sign-up")}
          >
            Join Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
