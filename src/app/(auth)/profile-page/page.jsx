"use client";

import { signOut, updateUser, useSession } from '@/lib/auth-client';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const Page = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-spinner loading-md text-green-700"></span>
            </div>
        );
    }


    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("আপনি সফলভাবে সাইন আউট করেছেন!");
                    router.push("/");
                },
            },
        });
    };

    const handleUpdateName = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        try {
            const { data, error } = await updateUser({
                name: userData.name,
            });

            if (error) {
                toast.error("নাম আপডেট করতে ব্যর্থ হয়েছে, দয়া করে আবার চেষ্টা করুন!");
                return;
            }

            toast.success("আপনার নাম সফলভাবে আপডেট হয়েছে!");
        } catch (error) {
            toast.error("নাম আপডেট করতে ব্যর্থ হয়েছে, দয়া করে আবার চেষ্টা করুন!");
        }
    };

    return (
        <div className="p-6 max-w-[650px] mx-auto flex flex-col gap-6">

            <div>
                <h2 className="text-xl font-bold text-gray-800">আমার প্রোফাইল</h2>
                <p className="text-xs text-gray-500 mt-1">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            <div className="bg-white border border-[#e2e9e3] rounded-xl px-5 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-wrap justify-between items-center gap-4">
                <div className="flex items-center gap-4">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full border border-gray-100 overflow-hidden">
                            <Image
                                src="/user-default.jpg"
                                alt="user"
                                width={64}
                                height={64}
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base font-bold text-gray-800">{session?.user?.name || "ব্যবহারকারী"}</h2>
                        <p className="text-sm text-gray-500">{session?.user?.email || "ইমেইল পাওয়া যায়নি"}</p>
                    </div>
                </div>

                <button
                    onClick={handleSignOut}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-red-500 font-semibold border border-red-200 bg-red-50/30 rounded-lg hover:bg-red-50 active:scale-95 transition-all"
                >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>সাইন আউট</span>
                </button>
            </div>

            <div className="bg-white border border-[#e2e9e3] rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                <h2 className="text-base font-bold text-gray-800 border-b border-gray-100 pb-3 mb-4">তথ্য</h2>

                <form onSubmit={handleUpdateName}>
                    <div className="flex flex-col gap-1.5 mb-3">
                        <label className="text-[11px] font-semibold text-gray-600">
                            নাম
                        </label>
                        <input
                            name="name"
                            type="text"
                            defaultValue={session?.user?.name || ""}
                            className="w-full h-[38px] px-3 text-[13px] rounded-md border border-[#e1e9e2] bg-[#fbfdfa] outline-none focus:border-green-600 transition"
                            placeholder="আপনার নাম লিখুন"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full h-[38px] mt-2 rounded-md bg-[#008940] hover:bg-[#007034] text-white text-xs font-semibold shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition"
                    >
                        আপডেট
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Page;
