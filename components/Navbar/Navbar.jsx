import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const items=[
    {item:'Home',url:'/'},
    {item:'about',url:"/about"},
    {item:'contact as',url:'/contact'}
]
function Navbar() {
  return (
    <div className='flex justify-between items-center  dark:bg-black z-10 md:pl-4 fixed w-full '>
      <Image
      src={'/planb.png'}
      width={140}
      height={140}
      loading='lazy'
      className='md:pl-4 w-20 md:w-fit md:h-fit h-20 py-2 mr-5'
      />
      <div className='md:flex  flex-grow items-center justify-end pr-10'>
        {items.map((item)=>{
            return(
                <Link className='capitalize font-extrabold px-8' href={item.url}>
                {item.item}
                </Link>
            )
        })}
       

      </div>
      <div className='flex mr-10 flex-col items-end justify-between  h-8  w-12 md:hidden'>
        <span className='h-[2px] w-3/4 bg-gradient-to-r from-emerald-600 via-sky-400 to-purple-400 border-transparent '></span>
        <span className='h-[2px] w-2/4 bg-gradient-to-r from-red-700 via-gray-100 to-green-500 border-transparent '></span>
        <span className='h-[2px] w-4/6 bg-gradient-to-r from-slate-200 via-amber-300 to-green-500 border-transparent '></span>
      </div>
    </div>
  )
}

export default Navbar
