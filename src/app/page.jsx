'use client';

import React, {useState} from 'react'
import Image from 'next/image'
import { BiPackage } from "react-icons/bi";
import { MdAttachMoney } from "react-icons/md";
import { LuClock4 } from "react-icons/lu";

import SWR from './api/swr';
import { products } from './api/variables';

import { motion } from 'framer-motion'

import Hello from './../assets/img/hello.png'
import Github from './../assets/svg/github.svg'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import Technologies from '@/components/technologies'

import './language.css'
const Home = () => {

  const container = {
    visible: {
      transition: {
        delayChildren: 0.3,
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

  const github = SWR('githubRep');
  const githubRep = github ? github : null;

  return (
    <div>
      <span className='w-full block h-[40rem] absolute -z-[1] select-none mask top-0 left-0 right-0 background-image mask' draggable='false'></span>
      <Navbar />
      <motion.div initial={{ opacity: 0, translateY: 40}} animate={{ opacity: 1, translateY: 0}} >
        <div className='flex flex-col items-center justify-center py-44'>
          <div >
            <div className="justify-between w-full flex items-center max-w-7xl gap-x-72">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl sm:text-6xl md:text-8xl text-center tracking-tight mt-9 max-w-4xl font-oceanwide">
                  Hello
                  <div className="hidden md:inline-flex items-center justify-center ml-5 mr-5">
                    <Image 
                      src={Hello}
                      alt="Hello"
                      width={96}
                      height={96}
                    />
                  </div>
                  this is the world of&nbsp;
                  <span className="bg-text bg-text-blue">Harbiyeli</span>
                  .
                </h1>
                <p className='max-w-lg text-center text-black/70 font-galanoMedium text-base sm:text-lg font-medium mt-2'>I{"'"}m a Full Stack developer, my name is Egemen. I live in Turkey and I am dealing with all kinds of projects.</p>
              </div>
            </div>
          </div>
        </div>
        <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={container} >
          <div className='py-24 max-w-6xl w-full mx-auto'>
            <div className='flex flex-col items-start justify-start'>
              <h1 className='flex items-center text-2xl sm:text-4xl text-start tracking-tight font-oceanwide'>
                <Image
                  src={Github}
                  width={34}
                  height={34}
                  alt='Github'
                  className='mr-2'
                />
                <span className='bg-text-gray'>GitHub</span>
                &nbsp;Repositories
              </h1>
              <p className='font-galanoMedium text-black/80 tracking-tight text-sm sm:text-base'>Here are some of my repositories that I{"'"}m proud of.</p>
            </div>
            <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={container} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {!githubRep.isLoading && githubRep.data.sort((a, b) => b.stargazers_count - a.stargazers_count).map((items, key) => (
                <motion.a variants={item} href={items.html_url} key={items.id} target='_blank'>
                <div className='p-6 bg-gray-200/70 border border-black/5 rounded-lg transition-all duration-200 hover:bg-gray-300/60 cursor-pointer'>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-start w-full">
                      <div className="flex flex-col max-w-sm w-full">
                        <div className="flex items-center space-x-2">
                          <h1 className='flex text-lg text-gray-700 items-center tracking-tight font-oceanwide'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
                            {items.name}
                          </h1>
                          <div className="flex items-center justify-center px-2 py-0.5 rounded-full border border-blue-500 bg-blue-200/40 tracking-tight transition-all duration-200 text-xs">
                            <span className='text-blue-500 font-galanoSemiBold'>{items.private !== true ? 'Public' : 'Private'}</span>
                          </div>
                        </div>
                        <p className='text-black/70 text-[13px] font-galanoMedium tracking-tight mt-1 break-all line-clamp-1 h-4'>
                        {items.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-8 w-full">
                        <div className="flex items-center justify-center">
                          <div className={`h-4 w-4 ${items.language ? items.language.toLowerCase() : `bg-gray-500`} rounded-full mr-1`}></div>
                          <p className='font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1'>{items.language ?? 'None'}</p>
                        </div>
                        <div className="flex items-center justify-center space-x-3">
                          <div className="flex items-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="text-sky-400 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"></path></svg>
                            <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">{items.stargazers_count}</p>
                          </div>
                          <div className="flex items-center">
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><circle cx="18" cy="6" r="3"></circle><path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path><path d="M12 12v3"></path></svg>
                            <p className="font-galanoSemiBold text-sm tracking-tight text-black/80 ml-1">{items.forks_count}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.a>
              ))
              }
            </motion.div>
          </div>
        </motion.div>
        <div className='py-24 max-w-6xl w-full mx-auto'>
          <div className='flex flex-col items-start justify-start'>
            <h1 className='flex items-center text-2xl sm:text-4xl text-start tracking-tight font-oceanwide'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M22 8a.76.76 0 0 0 0-.21v-.08a.77.77 0 0 0-.07-.16.35.35 0 0 0-.05-.08l-.1-.13-.08-.06-.12-.09-9-5a1 1 0 0 0-1 0l-9 5-.09.07-.11.08a.41.41 0 0 0-.07.11.39.39 0 0 0-.08.1.59.59 0 0 0-.06.14.3.3 0 0 0 0 .1A.76.76 0 0 0 2 8v8a1 1 0 0 0 .52.87l9 5a.75.75 0 0 0 .13.06h.1a1.06 1.06 0 0 0 .5 0h.1l.14-.06 9-5A1 1 0 0 0 22 16V8zm-10 3.87L5.06 8l2.76-1.52 6.83 3.9zm0-7.72L18.94 8 16.7 9.25 9.87 5.34zM4 9.7l7 3.92v5.68l-7-3.89zm9 9.6v-5.68l3-1.68V15l2-1v-3.18l2-1.11v5.7z"></path></svg>
              <span className='bg-text-red'>My Products</span>
            </h1>
            <p className='font-galanoMedium text-black/80 tracking-tight text-sm sm:text-base'>My actively developed and on sale software products.</p>
          </div>
          <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
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
                      <p className='text-black/70 text-[13px] font-galanoMedium tracking-tight mt-1 break-all line-clamp-1 h-4'>
                      {items.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 w-full">
                      <div className="flex items-center justify-center">
                        <MdAttachMoney className="h-[18px] w-[18px] text-green-600"/>
                        <p className='font-galanoSemiBold text-sm tracking-tight text-black/80'>{items.price}</p>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
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
        </div>
        <Technologies />
      </motion.div>
      <Footer />
    </div>
  )
}

export default Home
