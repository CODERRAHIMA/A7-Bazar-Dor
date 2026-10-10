import React from 'react';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const NotFoundPage = () => {
    return (
        <main className="flex min-h-[75vh] items-center justify-center px-4 py-12 bg-[#e2e9e3]">
            <div className="w-full max-w-xl rounded-2xl border border-[#e2e9e3] bg-white p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all">
                
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-green-700">
                    <ShoppingBag className="h-6 w-6" strokeWidth={1.8} />
                </div>

                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.15em] text-green-700">
                    Error 404
                </p>
                
                <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-3xl">
                    পৃষ্ঠাটি <span className="text-green-700">খুঁজে পাওয়া যায়নি</span>
                </h1>

                <p className="mx-auto mt-3 max-w-md text-xs sm:text-sm leading-6 text-gray-500">
                    ঠিকানাটি ভুল হতে পারে অথবা পৃষ্ঠাটি সরিয়ে নেওয়া হয়েছে। বাজারদরের
                    হালনাগাদ তথ্য দেখতে নিচে দেওয়া অপশনগুলো ব্যবহার করুন।
                </p>

                <div className="mt-6 flex flex-col justify-center gap-2 sm:flex-row">
                    <Link
                        href="/"
                        className="btn btn-sm h-[38px] px-5 border-none bg-green-700 text-white hover:bg-green-800 normal-case rounded-md text-xs font-semibold"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>

                <p className="mt-8 text-[11px] text-gray-400">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>
            </div>
        </main>
    );
};

export default NotFoundPage;
