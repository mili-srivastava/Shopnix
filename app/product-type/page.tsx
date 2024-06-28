import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductType = () => {
    return (
        <div className='md:p-10 p-5 flex justify-center'>
            <div className='bg-gray-300 px-8 pb-10 pt-5 shadow-2xl rounded-lg h-fit md:w-[90%] md:flex gap-10 items-center'>
                <Image src='/images/product-type.png' width={500} height={500} alt='logo' className='md:hidden h-72  pb-8  ' />

                <div className='md:w-[60%]'>
                    <h1 className='font-bold text-2xl pt-3 mb-12'>Let&apos;s add a type, Category and Sub-Category</h1>

                    <form action="">
                        <label htmlFor="type" className='block pb-1 text-sm font-medium'>Add a Product Type</label>
                        <input type="text" id='type' className='w-full p-2 mb-5 rounded-lg border border-black px-3' placeholder='e.g books' />

                        <label htmlFor="category" className='pb-1 block text-sm font-medium '>Add a Category (optional)</label>
                        <input type="text" id='category' className='w-full p-2 mb-5 rounded-lg outline-1 border border-black px-3' placeholder='e.g Anatomy' />

                        <label htmlFor="subCategory" className='pb-1 block text-sm font-medium'>Add a Sub-Category (optional)</label>
                        <input type="text" id='subCategory' className='w-full p-2 mb-10 rounded-lg outline-1 border border-black px-3' placeholder='e.g Medical Book' />

                    </form>

                    <div className='flex gap-5 justify-center md:justify-end'>
                        <Link href="/theme"><button className='px-5 py-1 bg-gray-400 rounded-lg'>Back</button></Link>
                        <Link href="/add-product"><button className='px-5 py-1 bg-blue-500 text-white rounded-lg'>Next</button></Link>
                    </div>
                </div>
                <Image src='/images/product-type.png' width={500} height={500} alt='logo' className='md:flex hidden pb-8 md:w-[40%] ' />

            </div>
        </div>
    )
}

export default ProductType