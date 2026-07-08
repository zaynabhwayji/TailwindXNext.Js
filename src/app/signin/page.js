import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='bg-white rounded-2xl shadow-xl p-8 w-90 h-fit'>
                <div className='text-xl font-bold text-gray-900 mt-4 text-center'>Sign in</div>
                <div className='text-xs text-gray-400 text-center'>Welcome Back! Please enter your details</div>
                <div className='flex flex-col gap-1'>
                    <label className='text-sm font-semibold text-gray-700'>
                        Email address
                    </label>
                    <input
                        type='email'
                        placeholder='you@example.com'
                        className='border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                    <label className='text-sm font-semibold text-gray-700'>
                        Password
                    </label>
                    <input
                        type='password'
                        placeholder='••••••••'
                        className='border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500' />
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <div className='flex gap-2'>
                        <input type='checkbox' className='w-4 h-4' />
                        <label className='text-sm text-gray-600'>Remember me</label>
                    </div>
                    <a href='#' className='text-sm text-indigo-600 hover:underline'>Forgot password?</a>
                </div>
                <button className='w-full bg-indigo-500 text-white py-2 rounded-lg font-bold mt-4 hover:bg-indigo-700'>Sign in</button>
                 <div className='flex items-center gap-3 my-4'>
                    <div className='flex-1 h-px bg-gray-200' />
                    <span className='text-xs text-gray-400'>or</span>
                    <div className='flex-1 h-px bg-gray-200' />
                </div>
                <button className='w-full bg-white-600 text-gray-500 py-2 rounded-lg font-bold mt-4 hover:bg-gray-300 border border-gray-200'>Continue with Google</button>

                <p className='text-xs text-gray-400 mt-4 text-center'>Don't have an account? <a href='#' className='text-indigo-600 hover:underline'>Sign up</a></p>

            </div>
        </div>
    )
}

export default page