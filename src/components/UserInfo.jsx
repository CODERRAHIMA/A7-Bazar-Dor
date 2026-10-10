"use client";

import { signOut, useSession } from '@/lib/auth-client';
import { LogOut, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import React from 'react';
import toast from 'react-hot-toast';

const UserInfoPage = () => {

    const { data: session, isPending } = useSession();
    const router = useRouter();

    if (isPending) {
        return (
            <>...</>
        )
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

    return (
        <div>
            {
                session ? <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost hover:bg-gray-50 flex items-center gap-2 normal-case rounded-full px-3 py-5.5 transition-colors duration-200"
                    >
                        <div className="avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    src="/user-default.jpg"
                                    alt={session.user.name}
                                    width={100}
                                    height={100}
                                />
                            </div>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{session.user.name} ▾</span>
                    </div>


                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-2xl z-[1] w-64 p-4 shadow-xl border border-gray-100 mt-2">
                        <div className="px-2 pb-3 mb-2 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-800">{session.user.name}</h2>
                            <p className="text-xs text-gray-500 truncate">{session.user.email}</p>
                        </div>

                        <ul className="space-y-1">
                            <li>
                                <Link href="/profile-page" className="flex items-center gap-3 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg active:bg-gray-100">
                                    <User className="w-4 h-4 text-blue-500" />
                                    <span>আমার প্রোফাইল</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={handleSignOut} className="flex items-center gap-3 px-2 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg w-full text-left active:bg-red-100">
                                    <LogOut className="w-4 h-4" />
                                    <span>সাইন আউট</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                    :
                    <div className="flex items-center gap-3 sm:gap-6 text-[12px] sm:text-[13px] font-semibold text-gray-800 shrink-0">
                        <Link href="/sign-in">
                            <button className="hover:text-black transition-colors font-bold cursor-pointer whitespace-nowrap">
                                সাইন ইন
                            </button>
                        </Link>

                        <Link href="/sign-up">
                            <button className="bg-[#008744] px-3 sm:px-4 py-2 sm:py-2.5 text-white rounded-lg sm:rounded-xl shadow-md hover:bg-[#007038] transition-all active:scale-95 cursor-pointer whitespace-nowrap">
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfoPage;