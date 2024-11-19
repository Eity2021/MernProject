// import React from 'react'
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
export default function AuthLogin() {
  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="px-56 pt-80">
    <div>
      <div>
        <div className="text-center">
          <h2 className="font-[poppins] font-bold text-[28px]">
          Sign in to your account
          </h2>
          <p className="font-[poppins] font-medium text-[18px]">
           Don't have an account 
            <span className="cursor-pointer underline font-bold"> Register</span>
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
  

            <div>
              <p className="font-[poppins] font-bold text-[16px] text-left pb-1 pt-3">
                Email
              </p>
              <Input
                type="email"
                placeholder="Enter Email"
                {...register("Email", { required: true })}
              />
            </div>

            <div>
              <p className="font-[poppins] font-bold text-[16px] text-left pb-1 pt-3">
                Password
              </p>
              <Input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
            </div>

            <Button type="submit" className="w-[100%] mt-3">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};
