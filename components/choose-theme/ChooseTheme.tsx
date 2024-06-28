"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const ChooseTheme = () => {
  const [appliedTheme, setAppliedTheme] = useState(null);

  const themes = [
    { id: 1, name: "Bags Theme", image: "/images/theme1.png", recommended: true },
    { id: 2, name: "Flex Theme", image: "/images/theme2.png" },
    { id: 3, name: "Chick Theme", image: "/images/theme3.png" },
  ];

  const handleApply = (id: any) => {
    setAppliedTheme(id);
  };

  return (
    <div className="p-3 bg-gray-300 h-fit pb-32 ">
      <h1 className="font-bold text-3xl mx-12 mb-10 mt-8 flex justify-center md:justify-start ">Apply a theme</h1>
      <div className="grid md:gap-16 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 md:mx-10">
        {themes.map((theme) => (
          <div key={theme.id} className="bg-white w-96 sm:w-72 md:w-80 rounded-xl flex flex-col mx-auto py-5 shadow-2xl">
            <Image src={theme.image} width={500} height={500} alt={theme.name} className="p-7 h-60" />
            <h1 className="font-bold text-xl py-3 mx-6">
              {theme.name} {theme.recommended && <span className="text-sm font-normal">(Recommended)</span>}
            </h1>
            <button
              onClick={() => handleApply(theme.id)}
              className={`border-2 px-7 my-5 py-2 rounded-xl font-medium mx-6 ${appliedTheme === theme.id ? 'border-green-600 bg-green-600 text-white' : 'border-green-600'
                }`}
            >
              {appliedTheme === theme.id ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </div>
      <Link href="/product-type"><button className=" px-10 py-2 rounded-xl font-medium text-lg bg-blue-600 text-white my-10 float-right mx-10">
        Next
      </button></Link>
    </div>
  );
};

export default ChooseTheme;
