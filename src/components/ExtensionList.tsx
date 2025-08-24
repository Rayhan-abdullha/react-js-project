import React, { useEffect, useState } from "react";
import FilterButtons from "./FilterButtons";

type ExtensionType = {
    description: string;
    isActive: boolean;
    logo: string;
    name: string;
};

const ExtensionList = () => {
    const [data, setData] = useState<ExtensionType[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/data.json");
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    return (
        <div className="container mx-auto px-3">
            <FilterButtons />
            <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.map((extension, index) => (
                    <div
                        key={index}
                        className="border border-slate-800 rounded-lg p-4"
                    >
                        <div className="flex gap-4">
                            <img
                                src={extension.logo}
                                alt={extension.name}
                                className="w-10 h-10 object-contain"
                            />
                            <div>
                                <h2 className="font-bold text-lg leading-[20px] mb-2">{extension.name}</h2>
                                <p className="text-[12px]">{extension.description}</p>
                            </div>
                        </div>

                        <div className="flex space-x-4 justify-between mt-10">
                            <button className="px-3 py-1 bg-slate-200 dark:bg-slate-800 rounded-full text-[11px]">Remove</button>
                            <label className="relative inline-flex items-center cursor-not-allowed">
                                <input
                                    type="checkbox"
                                    checked={extension.isActive}
                                    readOnly
                                    className="sr-only peer"
                                />
                                <div className="w-8 h-4 bg-red-500 rounded-full peer-checked:bg-green-500 transition-colors duration-300"></div>
                                <div className="absolute left-[-1px] top-[5px] w-[13px] h-[14px] bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                            </label>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ExtensionList;
