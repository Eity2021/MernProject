// import React from 'react'
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { useRegisterMutation } from "@/features/auth/authApi";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Registration() {
  // const [error, setError] = useState("");
  const [resRegister, { data, isLoading, error }] = useRegisterMutation();
  console.log("data", data);
  const { toast } = useToast();
  // toast({
  //   title: "Scheduled: Catch up",
  //   description: "Friday, February 10, 2023 at 5:57 PM",
  // })
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.code === 200) {
      toast({
        title: data?.message,
      });
      navigate("/auth/login");
    } else if (data?.code === 208) {
      toast({
        title: data?.message,
        variant: "destructive",
      });
    }
  }, [data, navigate, toast]);

  const {
    register,
    handleSubmit,
    // watch,
    // formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    resRegister({
      userName: formData.userName,
      email: formData.email,
      password: formData.password,
    });

    // if(data?.code){
    //   navigate("/auth.login");
    // }
  };
  return (
    <div className="px-56 pt-80">
      <div>
        <div>
          <div className="text-center">
            <h2 className="font-[poppins] font-bold text-[28px]">
              Create New account
            </h2>
            <p className="font-[poppins] font-medium text-[18px]">
              Already have an account{" "}
              <span className="cursor-pointer underline font-bold">Login</span>
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <p className="font-[poppins] font-bold text-[16px] text-left pb-1">
                  User Name
                </p>
                <Input
                  type="userName"
                  placeholder="Enter user"
                  {...register("userName", { required: true })}
                  className="w-[100%]"
                />
              </div>

              <div>
                <p className="font-[poppins] font-bold text-[16px] text-left pb-1 pt-3">
                  Email
                </p>
                <Input
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
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
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
