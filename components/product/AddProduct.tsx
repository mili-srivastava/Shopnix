"use client"
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productDescription: '',
        netPrice: '',
        listPrice: '',
        discountPercentage: '',
        gstRate: '',
        shippingCharges: '',
        stockLevel: ''
    });
    const [images, setImages] = useState<File[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages(prevImages => [...prevImages, ...files]);
    };

    return (
        <div className='px-10 pb-5 pt-10 md:flex w-[100%] bg-gray-300'>

            <div className='md:w-[55%] lg:w-[60%] w-full bg-white shadow-2xl px-5 rounded-lg overflow-y-scroll '>
                <div className='flex flex-col justify-center pt-10'>
                    <h1 className='md:text-3xl text-2xl  font-bold'>Let&apos;s Add your First Product</h1>

                    <p className='text-2xl py-5'>Basic Details</p>

                    <form>
                        <label htmlFor="productName" className='block pb-1 text-sm font-medium'>Product Name</label>
                        <input
                            type="text"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            className='w-full py-2 text-sm mb-5 rounded-lg border border-black px-3'
                            placeholder='e.g Anatomy Book'
                        />

                        <label htmlFor="productDescription" className='block pb-1 text-sm font-medium'>Product Description</label>
                        <textarea
                            name="productDescription"
                            value={formData.productDescription}
                            onChange={handleChange}
                            cols={30}
                            rows={5}
                            className='w-full py-1 text-sm mb-5 rounded-lg border border-black px-3'
                            placeholder="Gray's Anatomy is a reference book of human anatomy.."
                        ></textarea>

                        <label htmlFor="file" className="labelFile w-40 flex flex-col items-center justify-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
                            <span>
                                <svg
                                    xmlSpace="preserve"
                                    viewBox="0 0 184.69 184.69"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Capa_1"
                                    version="1.1"
                                    width="60px"
                                    height="60px"
                                >
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M149.968,50.186c-8.017-14.308-23.796-22.515-40.717-19.813
                                                    C102.609,16.43,88.713,7.576,73.087,7.576c-22.117,0-40.112,17.994-40.112,40.115c0,0.913,0.036,1.854,0.118,2.834
                                                    C14.004,54.875,0,72.11,0,91.959c0,23.456,19.082,42.535,42.538,42.535h33.623v-7.025H42.538
                                                    c-19.583,0-35.509-15.929-35.509-35.509c0-17.526,13.084-32.621,30.442-35.105c0.931-0.132,1.768-0.633,2.326-1.392
                                                    c0.555-0.755,0.795-1.704,0.644-2.63c-0.297-1.904-0.447-3.582-0.447-5.139c0-18.249,14.852-33.094,33.094-33.094
                                                    c13.703,0,25.789,8.26,30.803,21.04c0.63,1.621,2.351,2.534,4.058,2.14c15.425-3.568,29.919,3.883,36.604,17.168
                                                    c0.508,1.027,1.503,1.736,2.641,1.897c17.368,2.473,30.481,17.569,30.481,35.112c0,19.58-15.937,35.509-35.6w-60,35.509H97.391
                                                    v7.025h44.761c23.459,0,42.538-19.079,42.538-42.535C184.69,71.545,169.884,53.901,149.968,50.186z"
                                                ></path>
                                            </g>
                                            <g>
                                                <path
                                                    d="M108.586,90.201c1.406-1.403,1.406-3.672,0-5.075L88.541,65.078
                                                    c-0.701-0.698-1.614-1.045-2.534-1.045l-0.064,0.011c-0.018,0-0.036-0.011-0.054-0.011c-0.931,0-1.85,0.361-2.534,1.045
                                                    L63.31,85.127c-1.403,1.403-1.403,3.672,0,5.075c1.403,1.406,3.672,1.406,5.075,0L82.296,76.29v97.227
                                                    c0,1.99,1.603,3.597,3.593,3.597c1.979,0,3.59-1.607,3.59-3.597V76.165l14.033,14.036
                                                    C104.91,91.608,107.183,91.608,108.586,90.201z"
                                                ></path>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </span>
                        </label>
                        <input
                            className="input pt-2 text-sm"
                            name="images"
                            id="file"
                            type="file"
                            multiple
                            onChange={handleImageUpload}
                        />

                        <br />

                        <div className='flex gap-3 items-center mt-8'>
                            <input type="checkbox" className='scale-125 text-sm' />
                            <p>This Product has an SKU Code</p>
                        </div>

                        <input
                            type="text"
                            className='w-60 py-2 text-sm my-5 rounded-lg border border-black px-3'
                            placeholder='e.g- PROD0001'
                        />

                        <div className='flex gap-3 items-center mt-3'>
                            <input type="checkbox" className='scale-125 text-sm' />
                            <p>This Product has an HSN/SAC Code</p>
                        </div>

                        <hr className='border mt-16 border-black' />
                        <p className='text-2xl py-8'>Pricing Details</p>

                        <div className='flex gap-3 items-center mt-3'>
                            <input type="checkbox" className='scale-125 text-sm' />
                            <p>Price Inclusive of GST</p>
                        </div>

                        <div className='md:flex gap-8 items-center mt-5'>
                            <div>
                                <label htmlFor="netPrice" className='block pb-1 text-sm font-medium'>Net Price</label>
                                <input
                                    type="text"
                                    name="netPrice"
                                    value={formData.netPrice}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-80'
                                />
                            </div>
                            <div>
                                <label htmlFor="listPrice" className='block pb-1 text-sm font-medium'>List Price</label>
                                <input
                                    type="text"
                                    name="listPrice"
                                    value={formData.listPrice}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-100'
                                />
                            </div>
                        </div>

                        <div className='md:flex gap-8 items-center'>
                            <div>
                                <label htmlFor="discountPercentage" className='block pb-1 text-sm font-medium'>Discount Percentage</label>
                                <input
                                    type="text"
                                    name="discountPercentage"
                                    value={formData.discountPercentage}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-40'
                                />
                            </div>
                            <div>
                                <label htmlFor="gstRate" className='block pb-1 text-sm font-medium'>GST rate</label>
                                <input
                                    type="text"
                                    name="gstRate"
                                    value={formData.gstRate}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-20'
                                />
                            </div>
                        </div>

                        <div className='md:flex gap-8 items-center'>
                            <div>
                                <label htmlFor="shippingCharges" className='block pb-1 text-sm font-medium'>Shipping Charges (if any)</label>
                                <input
                                    type="text"
                                    name="shippingCharges"
                                    value={formData.shippingCharges}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-40'
                                />
                            </div>
                            <div>
                                <label htmlFor="stockLevel" className='block pb-1 text-sm font-medium'>Stock Level</label>
                                <input
                                    type="text"
                                    name="stockLevel"
                                    value={formData.stockLevel}
                                    onChange={handleChange}
                                    className='w-full md:w-60 py-2 text-sm mb-5 rounded-lg border border-black px-3'
                                    placeholder='e.g-100'
                                />
                            </div>
                        </div>

                        <div className='flex gap-5 mx-auto py-10'>
                            <Link href="/product-type"><button className='bg-gray-400 px-5 py-1 rounded-lg'>Back</button></Link>
                            <button className='bg-blue-500 text-white px-5 py-1 rounded-lg'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-full py-10 md:py-0 md:w-[45%] lg:w-[40%]'>
                <div className='p-5 rounded-lg'>

                    <div>
                        <div className="relative md:mx-5 md:-my-4 flex w-full  flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <div className='bg-gray-200 w-full h-64 rounded-lg absolute'></div>
                            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={URL.createObjectURL(image) || "/images/sample-img.jpg"}
                                        width={500}
                                        height={500}
                                        alt={`Product Image ${index + 1}`}
                                        className='object-cover'
                                    />
                                ))}
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-5 py-1 text-center text-sm font-medium text-white">{formData.discountPercentage || "10%"}</span>
                            </a>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-slate-900">{formData.productName || "Product Name"}</h5>
                                </a>
                                <p className="mt-2 text-sm text-slate-900">{formData.productDescription || "Product Description"}</p>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">{formData.netPrice || "$00"}</span>
                                        <span className="text-sm text-slate-900 line-through">{formData.listPrice || "$00"}</span>
                                    </p>
                                    <div className="flex items-center">
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>
                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                    </div>
                                </div>
                                <Link href="#" className="flex items-center justify-center rounded-md bg-orange-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Add to cart</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
