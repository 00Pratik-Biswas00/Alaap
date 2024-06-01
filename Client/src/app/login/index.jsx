"use client";
import React, { useEffect, useState } from "react";
import { Button, Img, Text, Input, Heading } from "../../components";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "@/Context/Slices/authSlice";
import api from "@/utils/axios";

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) router.push("/home1");
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/login`,
        {
          email,
          password,
        }
      );

      if (data.error) {
        toast.error(data.error);
        setLoading(false);
      } else {
        setEmail("");
        setPassword("");
        dispatch(setCredentials(data.user));
        window.localStorage.setItem("token", data.token);
        toast.success("Welcome Back!!");
        router.push("/home1");
      }
    } catch (err) {
      toast.error(err.response);
    }
  };
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="hidden lg:flex w-[60%] h-[1024px] flex-1 flex-col items-center justify-center bg-[url(/images/img_group_221.png)] bg-cover bg-no-repeat px-14 py-[305px] md:h-auto lg:self-stretch lg:p-5">
          <div className="my-[129px] flex w-[31%] flex-col items-center md:w-full">
            <Heading size="2xl" as="h1">
              Welcome to Sociofy!
            </Heading>
            <div className="mt-[20px]">
              <Text as="p" className="!text-gray-300">
                Already have an account?
              </Text>
              <Button
                size="3xl"
                className="w-full !text-gray-300 font-bold px-5"
                onClick={() => router.push("/login")}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="flex w-full p-4 my-20 items-center gap-2.5 lg:m-0 lg:w-[40%] lg:p-5">
          <div className="flex flex-1 flex-col items-center rounded-[32px] bg-white-A700 lg:p-12">
            <div className="flex flex-col items-center w-full p-8 lg:p-0 lg:mt-[32px] lg:w-[75%]">
              <Img
                src="img_header_logo.svg"
                width={41}
                height={41}
                alt="headerlogo"
                className="h-[41px] w-[41px] object-contain"
              />
              <div className="mt-[50px] flex flex-col items-center gap-3.5">
                <Link href="#">
                  <Heading size="xl" as="h2" className="!text-gray-900">
                    Sign In
                  </Heading>
                </Link>
                <Text as="p" className="!text-gray-500">
                  Sign in to your account
                </Text>
              </div>
              <form
                className="mt-[50px] flex flex-col gap-5 self-stretch"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col items-start justify-center gap-3">
                  <Heading
                    size="s"
                    as="h4"
                    className="uppercase tracking-[1.00px] !text-gray-900"
                  >
                    Email
                  </Heading>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-3">
                  <Heading
                    size="s"
                    as="h5"
                    className="uppercase tracking-[1.00px] !text-gray-900"
                  >
                    Password
                  </Heading>

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <Button
                  size="8xl"
                  type="submit"
                  className="mt-10 mb-10 bg-indigo-300 w-full rounded-[29px] font-bold px-5 md:px-1"
                >
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
