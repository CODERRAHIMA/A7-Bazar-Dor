"use client";

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const CategorySorting = ({ data }) => {
    const [sortBy, setSortBy] = useState("default");
    const [isLoading, setIsLoading] = useState(false);

    const handleSortChange = (e) => {
        const selectedValue = e.target.value;
        setIsLoading(true); 
        setSortBy(selectedValue);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(timer);
    }, [sortBy]);

    const sortedData = [...data].sort((a, b) => {
        if (sortBy === "price-low") {
            return a.today - b.today;
        }

        if (sortBy === "price-high") {
            return b.today - a.today;
        }

        return a.id - b.id;
    });

    return (
        <>
            <div className="my-5 flex items-center justify-end gap-2 rounded-2xl border border-[#dfe8e1] bg-[#f9fcfa] px-4 py-4 sm:px-5">
                <span className="text-sm text-gray-500">সাজান</span>

                <select
                    id="sort"
                    value={sortBy}
                    onChange={handleSortChange} 
                    className="rounded-lg border border-[#d1d9d2] bg-transparent px-3 py-2 text-sm text-gray-800 outline-none focus:border-green-600"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="price-low">দাম: কম থেকে বেশি</option>
                    <option value="price-high">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            <p className="text-sm text-gray-500 my-8">মোট {data.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12">
                {isLoading ? (
                    <div className="col-span-full py-10 text-center">
                        <p role="status" className="text-gray-400 font-medium animate-pulse">
                            পণ্য লোড হচ্ছে...
                        </p>
                    </div>
                ) : (
                    sortedData.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))
                )}
            </div>
        </>
    );
};

export default CategorySorting;
