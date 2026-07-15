'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
const page = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* NAVBAR responsive */}
      <nav className='mr-2 ml-2 bg-slate-800 flex items-center justify-between px-6 py-3 rounded-lg'>

        {/* logo, links, button go here */}
        <div className='flex items-center gap-6'>
          <button className='bg-indigo-500 rounded-lg px-4 py-2 text-white'> My App</button>
          <div className='hidden sm:flex gap-6 text-gray-400'>
            <Link className='hover:text-white' href="/">Home</Link>
            <Link className='hover:text-white' href='/'>About</Link>
            <Link className='hover:text-white'  href="/">Blog</Link>
            <Link className='hover:text-white' href="/">Contact</Link>
          </div>
        </div>
        <button className='hidden sm:block bg-indigo-500 text-white px-4 py-3 rounded-lg '>Sign Up</button>
        <button
          onClick={() => setOpen(!open)}
          className='sm:hidden text-white text-2xl'
        >
          ☰
        </button>
      </nav>
      {/* Mobile Menu */}
      {open && (
        <div className='sm:hidden mx-2 mt-2 bg-slate-800 rounded-lg p-4 flex flex-col justify items-center gap-3 text-gray-400'>

          <Link className='hover:text-white' href="/">Home</Link>
          <Link className='hover:text-white' href="/">About</Link>
          <Link className='hover:text-white' href="/">Blog</Link>
          <Link className='hover:text-white' href="/">Contact</Link>

          <button className='bg-indigo-500 text-white px-4 py-2 rounded-lg'>
            Sign Up
          </button>

        </div>
      )}

      {/* HERO */}
      <main className='mx-2 pt-6 pl-6 bg-gray-100 py-10'>
        {/* title, subtitle, buttons */}
        <h1 className='text-4xl font-bold text-gray-900  pt-5'>Welcome to MyApp</h1>
        <p className='text-gray-500 mt-2'>Build beautiful interfaces with Tailwind CSS</p>
        <div className='flex gap-4 mt-4'>
          <button className='bg-indigo-500 text-white px-6 py-3 rounded-lg'>Get Started</button>
          <button className='border border-gray-200 px-6 py-3 rounded-lg'>Learn More</button>
        </div>
      </main>
    </div>
  )
}

export default page
