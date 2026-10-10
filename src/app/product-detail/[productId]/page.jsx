import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';

const ProductDetail = async ({ params }) => {
    const { productId } = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${productId}`);
    const data = await res.json();

    if (!Array.isArray(data?.markets)) {
        notFound();
    }

    const priceDiff = (data.today - data.yesterday);
    const isPriceUp = data.change?.dir === 'up' || priceDiff > 0;

    const marketsWithAverage = data.markets.map((m) => ({
        ...m,
        avg: ((m.min + m.max) / 2).toFixed(2).replace('.00', ''),
    }));

    const minPrice = Math.min(...data.markets.map(m => m.min));
    const maxPrice = Math.max(...data.markets.map(m => m.max));

    const minPriceMarket = data.markets.find(m => m.min === minPrice)?.market || 'সবচেয়ে কম দামের বাজার';
    const maxPriceMarket = data.markets.find(m => m.max === maxPrice)?.market || 'সবচেয়ে বেশি দামের বাজার';

    return (
        <div className="max-w-5xl mx-auto px-4 py-5 sm:py-10 text-[#26332b] min-h-screen">

            <div className="flex items-center gap-1 text-xs text-gray-600 mb-4 sm:mb-8 font-semibold px-1">
                <span>হোম</span>&nbsp;
                <span>&gt;</span>&nbsp;
                <span>{data.categoryNameBn}</span>&nbsp;
                <span>&gt;</span>&nbsp;
                <span className="text-gray-700">{data.nameBn}</span>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-4 max-[399px]:p-3 shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-row items-center justify-between gap-6 max-[399px]:gap-2 mb-8">

                <div className="flex items-center gap-3 sm:gap-5 max-[399px]:gap-2 w-full sm:w-auto min-w-0">
                    <div className="flex h-16 w-16 max-[399px]:h-10 max-[399px]:w-10 shrink-0 items-center justify-center rounded-2xl max-[399px]:rounded-lg bg-[#f2f6f3] text-2xl max-[399px]:text-lg">
                        {data.image}
                    </div>

                    <div className="min-w-0">
                        <h1 className="text-lg sm:text-2xl max-[399px]:text-sm font-extrabold mb-0 sm:mb-1 tracking-tight">
                            {data.nameBn}
                        </h1>

                        <p className="text-[8px] sm:text-[11px] text-gray-500 font-bold tracking-wide">
                            প্রতি {data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'} · {data.categoryNameBn}
                        </p>

                        <p className="text-[8px] sm:text-xs w-[120px] sm:w-fit mt-2 max-[399px]:mt-1 font-bold text-gray-600">
                            গতকালের তুলনায় আজ দাম <span className="font-bold text-black">{isPriceUp ? 'বেড়েছে' : 'কমেছে'}</span> · <span>{Math.abs(priceDiff).toLocaleString('bn-BD')} টাকা</span>
                        </p>
                    </div>
                </div>

                <div className="w-[120px] max-[399px]:w-[82px] bg-[#F4F6F8] rounded-2xl max-[399px]:rounded-lg p-2 sm:p-4 max-[399px]:p-1.5 flex flex-col items-center justify-center text-center shrink-0 space-y-0.5">
                    <p className="text-[9px] sm:text-[10px] max-[399px]:text-[8px] font-bold text-gray-500 tracking-wide">আজকের দাম</p>

                    <p className="text-2xl max-[399px]:text-lg font-extrabold mt-1.5 max-[399px]:mt-1 text-[#1e2722] tracking-tighter leading-none">
                        {data.today.toLocaleString('bn-BD')}
                    </p>

                    <p className="text-[8px] sm:text-[10px] max-[399px]:text-[7px] font-bold text-gray-500 mt-1">
                        টাকা / {data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'}
                    </p>

                    <div className={`flex items-center gap-1 text-[10px] sm:text-sm max-[399px]:text-[9px] font-semibold 
                        ${data.change.pct === 0 ? "text-black" : data.change.dir === "up" ? "text-red-600" : "text-green-600"}`}
                    >
                        {data.change.pct === 0 ? "-" : data.change.dir === "up" ? "▲" : "▼"}

                        <span>
                            {data.change.pct === 0 ? "০.০" : new Intl.NumberFormat("bn-BD").format(Math.abs(data.change.pct))}%
                        </span>
                    </div>
                </div>

            </div>


            {/* Price Summary */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-18 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                <div className="mb-8">
                    <h3 className="text-[16px] font-bold mb-3.5 tracking-wide">দামের সারসংক্ষেপ</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="border border-gray-300 rounded-xl py-3 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            <p className="text-[10px] font-bold text-gray-500">সর্বনিম্ন মূল্য</p>
                            <p className="text-[20px] font-extrabold text-emerald-600 mt-1.5">
                                {minPrice.toLocaleString('bn-BD')} <span className="text-[13px] font-extrabold">টাকা</span>
                            </p>
                            <p className="text-[10px] font-bold text-gray-400 mt-1">
                                সবচেয়ে কম দামের বাজার: <span className="text-purple-600">{minPriceMarket}</span>
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-xl py-3 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            <p className="text-[10px] font-bold text-gray-500">সর্বোচ্চ মূল্য</p>
                            <p className="text-[20px] font-extrabold text-red-700 mt-1.5">
                                {maxPrice.toLocaleString('bn-BD')} <span className="text-[13px] font-extrabold">টাকা</span>
                            </p>
                            <p className="text-[10px] font-bold text-gray-400 mt-1">
                                সবচেয়ে বেশি দামের বাজার: <span className="text-purple-600">{maxPriceMarket}</span>
                            </p>
                        </div>

                        <div className="border border-gray-300 rounded-xl py-3 px-5 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                            <p className="text-[10px] font-bold text-gray-500">গত দাম</p>
                            <p className="text-[20px] font-extrabold text-emerald-600 mt-1.5">
                                {data.yesterday.toLocaleString('bn-BD')} <span className="text-[13px] font-extrabold">টাকা</span>
                            </p>
                            <p className="text-[10px] font-bold text-gray-400 mt-1">
                                প্রতি {data.unit === 'kg' ? 'কেজি' : data.unit === 'litre' ? 'লিটার' : data.unit === 'dozen' ? 'ডজন' : 'পিস'}-এর হিসাবে
                            </p>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <h3 className="text-[16px] font-bold mb-3.5 tracking-wide">বাজারভিত্তিক আজকের দাম</h3>
                <div className="border border-gray-300 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                            <thead>
                                <tr className="bg-[#f8faf9] text-gray-400 font-bold border-b border-[#eef2ef]">
                                    <th className="px-6 py-3 font-bold text-gray-600 text-left">বাজার</th>
                                    <th className="px-6 py-3 font-bold text-gray-600 text-left">বিভাগ</th>
                                    <th className="px-6 py-3 font-bold text-gray-600 text-right">সর্বনিম্ন</th>
                                    <th className="px-6 py-3 font-bold text-gray-600 text-right">সর্বোচ্চ</th>
                                    <th className="px-6 py-3 font-bold text-gray-600 text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black">
                                {marketsWithAverage.map((item, index) => (
                                    <tr key={index} className={`font-medium text-gray-600 ${index % 2 !== 0 ? "bg-[#eef1f0]" : ""}`}>
                                        <td className="px-6 py-3.5 font-bold text-[#26332b] text-left">{item.market}</td>
                                        <td className="px-6 py-3.5 text-gray-500 font-semibold text-left">{item.division}</td>
                                        <td className="px-6 py-3.5 text-right font-semibold">{item.min.toLocaleString('bn-BD')} টাকা</td>
                                        <td className="px-6 py-3.5 text-right font-semibold">{item.max.toLocaleString('bn-BD')} টাকা</td>
                                        <td className="px-6 py-3.5 text-right font-bold text-[#1e2722]">
                                            {Number(item.avg).toLocaleString('bn-BD')} টাকা
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

const ProductdetailPage = ({ params }) => {
    return (
        <Suspense fallback={<div className="text-center py-10 text-xs text-gray-400">লোড হচ্ছে...</div>}>
            <ProductDetail params={params} />
        </Suspense>
    );
};

export default ProductdetailPage;
