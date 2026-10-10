import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import React from 'react';

const Marquee = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data = await res.json();

    const filteredData = data.filter(item => item?.change?.dir !== "flat");

    return (
        <div className="w-full bg-[#fcfcfc] border-y border-gray-100 py-2 shadow-sm overflow-hidden">
            <MarqueeText direction="right" duration="20">
                <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
                    {[...filteredData, ...filteredData].map((item, i) => {
                        return (
                            <Link href={`/product-detail/${item.id}`} key={i}>
                                <div className="flex items-center gap-1.5 sm:gap-2 border-r border-gray-200 pr-3 sm:pr-6 whitespace-nowrap">

                                    <span className="text-sm sm:text-base filter grayscale opacity-80">
                                        {item.image}
                                    </span>

                                    <span className="text-gray-800 font-semibold">
                                        {item.nameBn}
                                    </span>

                                    <span className="text-gray-600">
                                        {new Intl.NumberFormat('bn-BD').format(item.today)} টাকা/{item.unit === 'kg' ? 'কেজি' : item.unit === 'litre' ? 'লিটার' : item.unit === 'dozen' ? 'ডজন' : 'পিস'}
                                    </span>

                                    <span className={`flex items-center gap-1 text-xs sm:text-sm
                                ${item.change.dir === "up" ? "text-red-600" : "text-green-600"}`}
                                    >
                                        {item.change.dir === "up" ? "▲" : "▼"}
                                        <span>
                                            {new Intl.NumberFormat('bn-BD').format(Math.abs(item.change.pct))}%
                                        </span>
                                    </span>

                                </div>
                            </Link>
                        );
                    })}
                </div>
            </MarqueeText>
        </div>
    );
};

export default Marquee;
