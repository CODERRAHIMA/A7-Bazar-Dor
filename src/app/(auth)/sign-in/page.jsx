"use client";

import { authClient, signIn } from '@/lib/auth-client';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react';

const SignInPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const { data: resData, error } = await signIn.email({
            email: data.email,
            password: data.password
        })

        if(!error) {
            redirect("/");
        }

        if(error) {
            alert("আপনার ইমেইল অথবা পাসওয়ার্ডটি ভুল, দয়া করে আবার চেষ্টা করুন।");
            return;
        }
    };

    return (
        <div className="bg-[#f0f5f1] flex flex-col items-center pb-12">

            <div className="text-center mt-10 mb-5">
                <h1 className="text-[20px] font-bold text-[#26352c]">
                    সাইন ইন
                </h1>

                <p className="text-[11px] text-gray-500 mt-1">
                    বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
                </p>
            </div>

            <form onSubmit={onSubmit} className='w-[calc(100%-32px)] max-w-[370px]'>
                <fieldset className="bg-[#fafcfb] border border-[#e2e9e3] rounded-xl p-4">

                    <div className="flex flex-col gap-1 mb-3">
                        <label className="text-[11px] font-semibold text-gray-600">
                            ইমেইল
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="w-full h-[35px] px-2 text-[13px] rounded-md border border-[#e1e9e2] bg-transparent outline-none focus:border-green-600"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-1 mb-3">
                        <label className="text-[11px] font-semibold text-gray-600">
                            পাসওয়ার্ড
                        </label>
                        <div className="relative w-full">
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="কমপক্ষে ৮ অক্ষর"
                                className="w-full h-[35px] px-2 text-[13px] rounded-md border border-[#e1e9e2] bg-transparent outline-none focus:border-green-600" 
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[35px] mt-3 rounded-md bg-green-700 text-white text-xs font-semibold shadow-[0_2px_2px_rgba(0,0,0,0.2)] hover:bg-green-800 transition"
                    >
                        সাইন ইন
                    </button>

                    <div className="flex items-center gap-3 my-3">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-[10px] text-gray-500">
                            অথবা
                        </span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-1 h-[35px] rounded-md border border-[#e3e9e4] text-[11px] font-bold text-gray-700 whitespace-nowrap hover:bg-gray-100 transition"
                        >
                            <Image
                                src="/search.png"
                                alt="Google"
                                width={12}
                                height={12}
                            />
                            Google দিয়ে চালিয়ে যান
                        </button>

                        <button
                            type="button"
                            className="flex items-center justify-center gap-1 h-[35px] rounded-md border border-[#e3e9e4] text-[11px] font-bold text-gray-700 whitespace-nowrap hover:bg-gray-100 transition"
                        >
                            <Image
                                src="/github.png"
                                alt="GitHub"
                                width={12}
                                height={12}
                            />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    <p className="text-center text-[10px] text-gray-500 mt-3">
                        অ্যাকাউন্ট নেই?{' '}
                        <Link
                            href="/sign-in"
                            className="text-[#078b43] font-semibold hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>

                </fieldset>
            </form>

            <Link
                href="/"
                className="text-gray-500 text-[10px] mt-5 mb-8 hover:text-green-700 transition"
            >
                ← হোম পেজে ফিরে যান
            </Link>

        </div>
    );
};

export default SignInPage;