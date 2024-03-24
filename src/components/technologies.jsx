import React from 'react'
import Image from 'next/image'

import AWS from '@/assets/svg/tech/aws.svg'
import Bootstrap from '@/assets/svg/tech/bootstrap.svg'
import Cisco from '@/assets/svg/tech/cisco.svg'
import Cloudflare from '@/assets/svg/tech/cloudflare.svg'
import CSS from '@/assets/svg/tech/css.svg'
import Express from '@/assets/svg/tech/express.svg'
import Font from '@/assets/svg/tech/font-awesome.svg'
import Framer from '@/assets/svg/tech/framer.svg'
import Git from '@/assets/svg/tech/git.svg'
import Gitbook from '@/assets/svg/tech/gitbook.svg'
import Github from '@/assets/svg/tech/github.svg'
import Go from '@/assets/svg/tech/go.svg'
import HTML from '@/assets/svg/tech/html.svg'
import JS from '@/assets/svg/tech/javascript.svg'
import JQ from '@/assets/svg/tech/jquery.svg'
import Lua from '@/assets/svg/tech/lua.svg'
import Mongo from '@/assets/svg/tech/mongo.svg'
import NJS from '@/assets/svg/tech/nextjs.svg'
import Node from '@/assets/svg/tech/nodejs.svg'
import NPM from '@/assets/svg/tech/npm.svg'
import ReactJS from '@/assets/svg/tech/react.svg'
import Sass from '@/assets/svg/tech/sass.svg'
import Tailwind from '@/assets/svg/tech/tailwindcss.svg'
import TS from '@/assets/svg/tech/typescript.svg'
import Vercel from '@/assets/svg/tech/vercel.svg'
import VM from '@/assets/svg/tech/vmware.svg'
import Vue from '@/assets/svg/tech/vue.svg'
import Yarn from '@/assets/svg/tech/yarn.svg'

const Technologies = () => {

  const tech = [
    {
      logo: TS,
      name: 'TypeScript'
    },
    {
      logo: JS,
      name: 'JavaScript'
    },
    {
      logo: Node,
      name: 'NodeJS'
    },
    {
      logo: Lua,
      name: 'Lua'
    },
    {
      logo: CSS,
      name: 'CSS'
    },
    {
      logo: Sass,
      name: 'Sass'
    },
    {
      logo: HTML,
      name: 'HTML'
    },
    {
      logo: ReactJS,
      name: 'ReactJS'
    },
    {
      logo: Vue,
      name: 'VueJS'
    },
    {
      logo: NJS,
      name: 'NextJS'
    },
    {
      logo: Express,
      name: 'ExpressJS'
    },
    {
      logo: JQ,
      name: 'JQuery'
    },
    {
      logo: Go,
      name: 'Go'
    },
    {
      logo: Mongo,
      name: 'MongoDB'
    },
    {
      logo: Vercel,
      name: 'Vercel'
    },
    {
      logo: Tailwind,
      name: 'TailwindCSS'
    },
    {
      logo: Bootstrap,
      name: 'Bootstrap'
    },
    {
      logo: Font,
      name: 'Font Awesome'
    },
    {
      logo: NPM,
      name: 'NPM'
    },
    {
      logo: Framer,
      name: 'Framer Motion'
    },
    {
      logo: Cloudflare,
      name: 'Cloudflare'
    },
    {
      logo: AWS,
      name: 'Amazon AWS'
    },
    {
      logo: Github,
      name: 'Github'
    },
    {
      logo: Git,
      name: 'Git'
    },
    {
      logo: Gitbook,
      name: 'Gitbook'
    },
    {
      logo: Yarn,
      name: 'Yarn'
    },
    {
      logo: VM,
      name: 'VMWare'
    },
    {
      logo: Cisco,
      name: 'Cisco'
    },
  ]
  return (
    <div className='py-24 max-w-6xl w-full mx-auto'>
        <div className='flex flex-col items-start justify-start'>
        <h1 className='flex items-center text-2xl sm:text-4xl text-start tracking-tight font-oceanwide'>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.5,19 C17.8807119,19 19,17.8807119 19,16.5 C19,15.1192881 17.8807119,14 16.5,14 C15.1192881,14 14,15.1192881 14,16.5 C14,17.8807119 15.1192881,19 16.5,19 Z M10,5 L12,3 M7.5,10 C8.88071187,10 10,8.88071187 10,7.5 C10,6.11928813 8.88071187,5 7.5,5 C6.11928813,5 5,6.11928813 5,7.5 C5,8.88071187 6.11928813,10 7.5,10 Z M8,16 L16,8 M5.5,21 C6.88071187,21 8,19.8807119 8,18.5 C8,17.1192881 6.88071187,16 5.5,16 C4.11928813,16 3,17.1192881 3,18.5 C3,19.8807119 4.11928813,21 5.5,21 Z M18.5,8 C19.8807119,8 21,6.88071187 21,5.5 C21,4.11928813 19.8807119,3 18.5,3 C17.1192881,3 16,4.11928813 16,5.5 C16,6.88071187 17.1192881,8 18.5,8 Z M12,21 L14,19"></path></svg>
            <span className='bg-text-blue'>Technologies</span>
            &nbsp;I Use
        </h1>
        <p className='font-galanoMedium text-black/80 tracking-tight text-sm sm:text-base'>I use a lot of technologies, but I{"'"}m always learning new ones.</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10'>
        {tech.map((items, key) => (
          <div key={items.name} className="w-full p-3 bg-gray-200/70 border border-black/5 rounded-lg transition-all duration-200 hover:bg-gray-300/60 cursor-pointer">
            <div className="flex items-center space-x-3">
            <Image 
                src={items.logo}
                alt={items.name}
                width={24}
                height={24}
            />
            <span className='ml-2 font-oceanwide text-gray-700'>{items.name}</span>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Technologies

