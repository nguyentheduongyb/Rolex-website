
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { useSession, signIn, signOut } from "next-auth/react"
import { useForm } from "react-hook-form";
import { ToggleSwitch, Button, TextInput } from 'flowbite-react';
import Link from "next/link"

import { FcGoogle } from "react-icons/fc"
import { SiGithub, SiFacebook } from "react-icons/si"
import PreLoader from "~/components/PreLoader"

import backendURL from '~/backendURL';
const Login = () => {
        // const { data: session } = useSession()
        // const { register, handleSubmit, formState: { errors } } = useForm();


        // const navigate = useRouter();

        // const [check, setCheck] = useState(false)

        // const onSubmit = async (data: any) => {
        //         const res = await signIn("credentials", {
        //                 callbackUrl: "/",
        //                 redirect: false,
        //                 email: data.email,
        //                 password: data.password,
        //         });
        //         console.log(res);
        // }
        // if (session) {
        //         navigate.push("/")
        // }
        // return (
        //         <div className="text-black h-screen grid grid-cols-2">
        //                 <div className="flex items-center justify-center">
        //                         <form onSubmit={handleSubmit(onSubmit)} className="w-[48%]">
        //                                 <div className='mb-10'>
        //                                         <h1 className="font-bold text-2xl">Đăng nhập</h1>
        //                                         <p className="text-[#67748E]">Nhập email và mật khẩu của bạn để đăng nhập</p>
        //                                 </div>
        //                                 <div className="mb-5">
        //                                         <TextInput
        //                                                 placeholder="Email"
        //                                                 required
        //                                                 type="email"
        //                                                 {...register("email")}
        //                                         />
        //                                 </div>
        //                                 <div className="mb-5">
        //                                         <TextInput
        //                                                 placeholder="Password"
        //                                                 required
        //                                                 type="password"
        //                                                 {...register("password")}
        //                                         />
        //                                 </div>
        //                                 <ToggleSwitch
        //                                         checked={check}
        //                                         className="mb-3 text-black"
        //                                         onChange={() => { setCheck(!check) }}
        //                                 />
        //                                 <Button type="submit" className="h-[48px] rounded-[6px] w-full text-white">
        //                                         Đăng nhập
        //                                 </Button >
        //                                 <Button color="gray" onClick={() => { signIn('google', { callbackUrl: "http://localhost:3000" }) }} className="mt-6 h-[42px] rounded-[2px] w-full flex items-center">Đăng nhập với Google <FcGoogle fontSize={18} className="ml-2" /></Button>
        //                                 <Button color="gray" className="mt-2 h-[42px] rounded-[2px] w-full">Đăng nhập với Facebook <SiFacebook fontSize={18} className="ml-2" /></Button>
        //                                 <Button color="gray" className="mt-2 h-[42px] rounded-[2px] w-full">Đăng nhập với Github <SiGithub fontSize={18} className="ml-2" /></Button>
        //                                 <div className="mt-5 text-[#67748e] text-sm text-center"><p>Bạn chưa có tài khoản? <Link href="/register" className="cursor-pointer text-[#CB0C9F]">Đăng ký</Link></p></div>
        //                         </form>
        //                 </div>
        //                 <div className="flex items-center justify-center relative">
        //                         <div className="w-[715px] bg-gradient-to-l from-[#7928ca] to-[#ff0080] h-[80vh] rounded-[12px] flex items-center justify-center" >
        //                                 <div className='bg-no-repeat bg-cover bg-center w-full h-full absolute opacity-40' style={{ backgroundImage: 'url("https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/shapes/pattern-lines.svg")' }}></div>
        //                                 <div className="w-full flex justify-center items-center flex-col text-center px-3">
        //                                         <img className="max-w-[500px] w-full relative" src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/illustrations/chat.png" alt="chat-img" />
        //                                         <h4 className="mt-5 text-white font-weight-bolder">"Crypto Currency là dạng tiền mã hoá (tiền điện tử)"</h4>
        //                                         <p className="text-white">Nó được tạo ra bởi các dự án phát hành trên Blockchain. Bạn có thể sử dụng tiền mã hóa để mua bán các sản phẩm như tiền thật.</p>
        //                                 </div>
        //                         </div>
        //                 </div>
        //                 {/* {loading && <PreLoader />} */}
        //         </div >
        // )
}

export default Login
