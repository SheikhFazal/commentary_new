"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const ResetPassword = () => {
  const router = useRouter();
  const [formValue, setFormValue] = useState({
    verifyCode: "",
    newPassword: "",
    confirmPassword: "",
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
    if (formValue?.newPassword === formValue?.confirmPassword) {
      toast.success("Password Reset Successfully!");
      router.push("/sign-in");
    } else {
      toast.error("Passwords and Confirm Password does not match");
    }
  };
  return (
    <div className="lg:col-span-5 md:col-span-6 col-span-12 py-16 lg:px-16 md:px-12 px-8 bg-[#11151E]">
      <div className="">
        <p className="text-4xl pb-32 pt-14 text-center">Reset Password</p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <input
          onChange={(e) => handleChange(e)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="verifyCode"
          placeholder="Enter Code"
          required
          value={formValue?.verifyCode}
          type="number"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="newPassword"
          placeholder="New Password"
          required
          value={formValue?.newPassword}
          type="password"
        />
        <input
          onChange={(e) => handleChange(e)}
          className="py-[20px] px-8 rounded-full w-full border border-[#3F495F] bg-transparent text-sm "
          id="confirmPassword"
          placeholder="Confirm Password"
          required
          value={formValue?.confirmPassword}
          type="password"
        />

        <button
          type="submit"
          className="py-[15px] font-semibold text-lg px-8 rounded-full w-full bg-[#001BFF]"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
