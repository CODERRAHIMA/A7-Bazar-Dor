import CategorySorting from '@/components/CategorySorting';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

const CategoryDetails = async ({ params }) => {
    const { categoryId } = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`);
    const data = await res.json();

    if (!data || data.length === 0) {
        notFound();
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="my-5 flex items-center gap-3 rounded-2xl border border-[#dfe8e1] bg-[#f9fcfa] px-4 py-5 sm:px-5">
                <div className="flex shrink-0 items-center justify-center text-4xl">
                    {data[0]?.image}
                </div>

                <div>
                    <h2 className="text-[22px] font-extrabold leading-6 text-[#26332b]">
                        {data[0]?.categoryNameBn}
                    </h2>

                    <p className="mt-1 text-[13px] text-gray-500">
                        {data.length.toLocaleString('bn-BD')}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            <CategorySorting data={data} />
        </div>
    );
};

const CategoryDetailsPage = ({ params }) => {
    return (
        <Suspense fallback={<div className="text-center py-10 text-xs text-gray-400">লোড হচ্ছে...</div>}>
            <CategoryDetails params={params} />
        </Suspense>
    );
};

export default CategoryDetailsPage;