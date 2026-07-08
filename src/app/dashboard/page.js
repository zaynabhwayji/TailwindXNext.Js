'use client'
import { useState } from 'react'
import StatCard from '@/components/StatCard'
export default function DashboardPage() {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex min-h-screen bg-gray-100 '>

            {/* MOBILE MENU BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className='sm:hidden fixed top-5 left-4 z-50 bg-indigo-500 text-white px-2 py-1 rounded-lg'
            >
                ☰
            </button>

            {/* SIDEBAR */}
            <aside className={`
                    fixed sm:static top-0 left-0 h-full z-40
                    w-64 bg-slate-900 flex flex-col p-4
                    transform transition-transform duration-300
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                    sm:translate-x-0 sm:h-auto
                `}>

                {/* logo */}
             
                <div className='bg-indigo-500 rounded-lg px-4 py-2 mb-6'>
                    <span className='text-white font-bold ml-5'>Dashboard</span>
                </div>

                {/* nav items */}
                <nav className='flex flex-col gap-1'>
                    <a className='bg-indigo-500 text-white px-3 py-2 rounded-lg text-sm'>
                        Overview
                    </a>
                    <a className='text-gray-400 px-3 py-2 rounded-lg text-sm hover:bg-slate-800'>
                        Analytics
                    </a>
                    <a className='text-gray-400 px-3 py-2 rounded-lg text-sm hover:bg-slate-800'>
                        Users
                    </a>
                    <a className='text-gray-400 px-3 py-2 rounded-lg text-sm hover:bg-slate-800'>
                        Settings
                    </a>
                </nav>

            </aside>
            {/* MAIN */}
            <main className='flex-1  p-2 sm:p-6 '>

                {/* topbar */}
                <div className='flex justify-between mb-6 bg-white p-4 rounded-lg shadow-sm pl-10 sm:pl-6'>
                    <h1 className='text-2xl font-bold text-gray-900'>Overview</h1>
                    <button className='bg-indigo-500 text-white px-1 py-2 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm hover:bg-indigo-700 sm:ml-10'>New Report</button>
                </div>

                {/* stat cards grid */}

                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 bg'>
                    <StatCard label='Revenue' value='$12,400' change='+12%' color='bg-sky-500' />
                    <StatCard label='Users' value='1,240' change='+8%' color='bg-violet-500' />
                    <StatCard label='Orders' value='340' change='+24%' color='bg-green-500' />
                    <StatCard label='Uptime' value='98.2%' change='+0.1%' color='bg-orange-500' />
                </div>
                {/* chart placeholder */}
                <div className='bg-white rounded-lg shadow-sm p-4 mb-6'>
                    <h1 className='text-xl sm:text-2xl font-bold text-gray-900 mb-10'>
                        Monthly Revenue
                    </h1>

                    <div className='flex items-end justify-between gap-1 sm:gap-2 h-64'>
                        <div className='bg-indigo-400 flex-1 h-20 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-28 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-24 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-36 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-32 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-40 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-44 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-32 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-36 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-28 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-40 rounded-xl'></div>
                        <div className='bg-indigo-400 flex-1 h-32 rounded-xl'></div>
                    </div>
                </div>

            </main>
        </div>
    )
}
