'use client';

import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import { motion } from 'framer-motion'

import HDLogo from '@/assets/img/hddev.png'
import GENLogo from '@/assets/img/genscripts.gif'
import AGLogo from '@/assets/img/agscripts.gif'
import AGDLogo from '@/assets/img/agdev.gif'


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

    const project = [
        {
            name: 'HD Dev',
            description: 'A comprehensive software server serving all kinds of domains',
            url: 'https://discord.gg/hddev',
            background: 'https://cdn.discordapp.com/banners/1187753307331121222/5e62a74d12238593c51f46e06c8f6cb0.webp?size=2048',
            logo: HDLogo
        },
        {
            name: 'Gen Scripts',
            description: 'A company that creates/develops custom scripts for a game called Fivem',
            url: 'https://gen.tebex.io',
            background: 'https://cdn.discordapp.com/banners/1168246245853233152/a_f553b1d274c3e07843223e2950abdda9.gif?size=2048',
            logo: GENLogo
        },
        {
            name: 'AG Scripts',
            description: 'A company that creates/develops custom scripts for a game called Fivem',
            url: 'https://agstore.tebex.io',
            background: 'https://cdn.discordapp.com/banners/1022073234260238356/a_ff3069dd5ba009d363c0e17bff40f5f0.gif?size=2048',
            logo: AGLogo
        },
        {
            name: 'AG Dev',
            description: 'A group that provides key, map, software services to Fivem game servers',
            url: 'https://discord.gg/agdev',
            background: 'https://cdn.discordapp.com/banners/1143593126636826655/a_3c7bd018e0ad9854cc29f825fcecc82c.gif?size=2048',
            logo: AGDLogo
        },
    ]

    return (
        <div>
            <span className='w-full block h-[40rem] absolute -z-[1] select-none mask top-0 left-0 right-0 background-image mask' draggable='false'></span>
            <Navbar />
            <motion.div initial={{ opacity: 0, translateY: 40}} animate={{ opacity: 1, translateY: 0}} className='max-w-6xl w-full mx-auto my-32'>
                <div className='flex flex-col w-full items-start mb-12'>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-oceanwide">My Projects</h1>
                    <p className="text-black/80 tracking-tight mt-2 text-normal max-w-md font-galanoMedium">On this page, you can see the projects that I have developed, which are actively ongoing or suspended.</p>
                </div>
                <motion.div initial="hidden" animate="visible" variants={container} className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-24">
                    {project.map((items, key) => (
                        <motion.a variants={item} key={items.name}target="_blank" href={items.url}>
                            <div className="p-5 w-full bg-gradient-to-r from-black/5 to-gray-200/30 border border-black/5 rounded-lg transition-all duration-200 hover:bg-gray-300/60 cursor-pointer">
                                <div className="w-full h-32 rounded-lg overflow-hidden bg-cover bg-center darkPartner" style={{backgroundImage: 'url('+items.background+')'}}>
                                    <div className="w-full h-full bg-black/10 backdrop-blur-sm">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Image
                                                src={items.logo}
                                                alt="Dark Partner"
                                                className="rounded-full"
                                                width={80}
                                                height={80}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col max-w-sm w-full pt-4">
                                    <div className="flex items-center space-x-2">
                                        <h1 className="text-lg text-gray-700 tracking-tight font-oceanwide">{items.name}</h1>
                                    </div>
                                    <p className="text-black/70 text-[13px] tracking-tight mt-1 break-all h-6 font-galanoMedium">{items.description}</p>
                                </div>
                                <div className="flex items-center justify-between pt-14 w-full">
                                    <div className="flex items-center space-x-1">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M574 665.4a8.03 8.03 0 0 0-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 0 0-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 0 0 0 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 0 0 0 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 0 0-11.3 0L372.3 598.7a8.03 8.03 0 0 0 0 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"></path></svg>
                                        <p className="text-xs tracking-tight font-galanoMedium">{items.url}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>   
            </motion.div>
            <Footer />
        </div>
    )
}

export default Projects
