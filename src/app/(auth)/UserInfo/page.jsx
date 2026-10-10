"use client";

import { signOut, useSession } from '@/lib/auth-client';
import { LogOut, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const UserInfoPage = () => {

    const { data: session } = useSession();

    return (
        <div>
            {
                session ? <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost flex items-center gap-2 normal-case rounded-full px-3 py-1">
                        <div className="avatar">
                            <div className="w-8 rounded-full">
                                {/* <Image 
              src="/user-profile.jpg" // আপনার ইমেজের পাথ দিন
              alt="Rezwan" 
              width={32} 
              height={32} 
            /> */}
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
                                <Link href="/profile" className="flex items-center gap-3 px-2 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg active:bg-gray-100">
                                    <User className="w-4 h-4 text-blue-500" />
                                    <span>আমার প্রোফাইল</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => signOut()} className="flex items-center gap-3 px-2 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg w-full text-left active:bg-red-100">
                                    <LogOut className="w-4 h-4" />
                                    <span>সাইন আউট</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                    :
                    <div className='flex items-center gap-6 text-[13px] font-semibold text-gray-800'>
                        <Link href="/sign-in">
                            <button className='hover:text-black transition-colors font-bold cursor-pointer'>
                                সাইন ইন
                            </button>
                        </Link>
                        <Link href="/sign-up">
                            <button className='bg-[#008744] px-4 py-2.5 text-white rounded-xl shadow-md hover:bg-[#007038] transition-all active:scale-95 cursor-pointer'>
                                সাইন আপ
                            </button>
                        </Link>
                    </div>
            }
        </div>
    );
};

export default UserInfoPage;