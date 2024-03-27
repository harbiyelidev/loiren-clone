'use client';

import React from 'react'
import { BiPackage } from "react-icons/bi";
import { PiMoneyFill } from "react-icons/pi";
import { LuClock4 } from "react-icons/lu";

import { products } from './../api/variables';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { motion } from 'framer-motion'

const Projects = () => {
    const container = {
        visible: {
          transition: {
            staggerChildren: 0.2
          }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            translateY: 20
        },
        visible: {
            opacity: 1,
            translateY: 0
        }
    }

    return (
        <div>
            <span className='w-full block h-[40rem] absolute -z-[1] select-none mask top-0 left-0 right-0 background-image mask' draggable='false'></span>
            <Navbar />
            <motion.div initial={{ opacity: 0, translateY: 40}} animate={{ opacity: 1, translateY: 0}} className='max-w-6xl w-full mx-auto my-32'>
                <div className='flex flex-col w-full items-start mb-12'>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-oceanwide">My Products</h1>
                    <p className="text-black/80 tracking-tight mt-2 text-normal max-w-md font-galanoMedium">My actively developed and on sale software products.</p>
                </div>
                <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-24">
                    {!products.isLoading && products.sort((a, b) => b.id - a.id).map((items, key) => (
                    <a href="/" key={items.id}>
                    <div className='p-6 bg-gray-200/70 border border-black/5 rounded-lg transition-all duration-200 hover:bg-gray-300/60 cursor-pointer'>
                        <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start w-full">
                            <div className="flex flex-col max-w-sm w-full">
                            <div className="flex items-center space-x-2">
                                <h1 className='flex text-lg text-gray-700 items-center tracking-tight font-oceanwide'>
                                <BiPackage className='mr-2 w-5 h-5'/>
                                {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z"></path></svg> */}
                                {items.name}
                                </h1>
                            </div>
                            <p className='text-black/70 text-[13px] font-galanoMedium tracking-tight mt-1 break-all line-clamp-2 h-9'>
                            {items.description}
                            </p>
                            </div>
                            <div className="flex items-center justify-between pt-8 w-full">
                            <div className="flex items-center justify-center">
                                <PiMoneyFill className="h-[18px] w-[18px] text-green-600"/>
                                <p className='font-galanoSemiBold text-sm tracking-tight text-black/80'>{items.price}</p>
                            </div>
                            <div className="flex items-center justify-center space-x-3">
                                {/* <div className="flex items-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-rose-400 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path></svg>
                                <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">1859</p>
                                </div>
                                <div className="flex items-center">
                                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5"></path><path d="M12 12l8 -4.5"></path><path d="M12 12l0 9"></path><path d="M12 12l-8 -4.5"></path><path d="M16 5.25l-8 4.5"></path></svg>
                                <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">0</p>
                                </div> */}
                                <div className="flex items-center">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-rose-400 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
                                <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">{items.version}</p>
                                </div>
                                <div className="flex items-center">
                                    <LuClock4 className='w-4 h-4 text-black mr-1'/>
                                <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">{items.upDate}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </a>
                    ))}
                </motion.div>
            </motion.div>
            <Footer />
        </div>
    )
}

export default Projects
