'use client';

import React from 'react'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div>
        <span className='w-full block h-[40rem] absolute -z-[1] select-none mask top-0 left-0 right-0 background-image mask' draggable='false'></span>
        <Navbar />
        <motion.div initial={{ opacity: 0, translateY: 40}} animate={{ opacity: 1, translateY: 0}} className='max-w-6xl w-full mx-auto my-32'>
            <div className='flex flex-col w-full items-start mb-12'>
                <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-oceanwide">Contact</h1>
                <p className="text-black/80 font-galano tracking-tight mt-2 text-normal max-w-md font-galanoMedium">You can contact me by filling in the desired items.</p>
            </div>
            <div className="flex flex-col items-start mt-24">
                <input placeholder="Name" className="mt-2 placeholder:text-black/50 px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] focus:text-black focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight font-galanoMedium" type="text" name='name' />
                <input placeholder="E-mail" className="mt-2 placeholder:text-black/50 px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] focus:text-black focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight font-galanoMedium" type="text" name='email' />
                <textarea placeholder="Message" className="mt-2 placeholder:text-black/50 px-6 w-[20rem] sm:w-[25rem] md:w-[30rem] focus:text-black focus:placeholder:text-black focus:bg-gray-100/90 outline-none py-2.5 font-galano bg-gradient-to-br from-transparent to-gray-400/20 border border-black/10 rounded-lg transition-all duration-200 hover:bg-gray-100/90 hover:placeholder:text-black tracking-tight font-galanoMedium"></textarea>
                <button className="w-[20rem] sm:w-[25rem] md:w-[30rem] mt-5 py-2.5 bg-black/5 hover:bg-black/10 transition-all duration-200 rounded-lg text-black/80 font-galano tracking-tight font-galanoMedium">Send</button>
            </div>
        </motion.div>
        <Footer />
    </div>
  )
}

export default Contact