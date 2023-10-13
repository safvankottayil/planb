'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const items=[
    {item:'Home',url:'/'},
    {item:'about',url:"/about"},
    {item:'contact as',url:'/contact'}
]
function Navbar() {
  const [show,setshow]=useState(false)
  return (
    <div className='flex justify-between items-center  dark:bg-black z-10 md:pl-4 fixed w-full '>
      <Image
      src={'/planb.png'}
      width={140}
      height={140}
      loading='lazy'
      className='md:pl-4 w-24 h-28 md:h-40 md:w-40 py-2 mr-5'
      />
      <div className={`${show?'border-l-2 w-4/5':'w-0'} md:w-fit md:static transition-all duration-500 bg-black flex overflow-hidden flex-col md:flex-row h-screen md:h-fit top-0 right-0 fixed pt-5 md:pt-0  flex-grow md:items-center md:justify-end md:pr-10`} >
        <div className='flex justify-end items-center'>
        <div onClick={()=>setshow(!show)} className='relative flex mr-8 flex-col  justify-between  h-8  w-8 md:hidden'>
        <span className='h-[3px] top-4 rotate-45 absolute w-full bg-gradient-to-r from-emerald-600 via-sky-400 to-purple-400 border-transparent '></span>
        <span className='h-[3px] top-4 -rotate-45 absolute w-full bg-gradient-to-r from-red-700 via-sky-400 to-green-500 border-transparent '></span>
      </div>
        </div>
    
        {items.map((item)=>{
            return(
                <Link className='capitalize font-extrabold py-3 px-8' href={item.url}>
                {item.item}
                </Link>
            )
        })}
       

      </div>
      <div onClick={()=>setshow(!show)} className='flex mr-10 flex-col items-end justify-between  h-8  w-12 md:hidden'>
        <span className='h-[2px] w-3/4 bg-gradient-to-r from-emerald-600 via-sky-400 to-purple-400 border-transparent '></span>
        <span className='h-[2px] w-2/4 bg-gradient-to-r from-red-700 via-gray-100 to-green-500 border-transparent '></span>
        <span className='h-[2px] w-4/6 bg-gradient-to-r from-slate-200 via-amber-300 to-green-500 border-transparent '></span>
      </div>
    </div>
  )
}

export default Navbar
