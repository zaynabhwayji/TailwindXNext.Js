// profile card component flexbox ronded avatar stats 
import React from 'react'

const page = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 '>
            <div className='bg-white rounded-2xl shadow-xl p-8 w-72 text-center'>
                <div className='w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center mx-auto text-2xl font-bold text-white  '>
                    AH
                </div>
                <div className='text-xl font-bold text-gray-900 mt-4'>Ahmad Hassan</div>
                <div className='inline-block bg-indigo-50 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full mt-4'>Full-Stack Developer</div>
                <div className='flex justify-around border-t border-gray-100 pt-4 mt-4'>
                    <div>
                        <div className='text-lg font-bold text-gray-900'>42k </div>
                        <div className='text-xs text-gray-400'>Projects</div>
                    </div>
                    <div>
                        <div className='text-lg font-bold text-gray-900'>8k </div>
                        <div className='text-xs text-gray-400'>Followers</div>
                    </div>
                    <div>
                        <div className='text-lg font-bold text-gray-900'>128</div>
                        <div className='text-xs text-gray-400'>Posts</div>
                    </div>
                </div>
                <button className='w-full bg-indigo-600 text-white py-2 rounded-lg font-bold mt-4 hover:bg-indigo-700'>Follow</button>
            </div>
        </div>

    )
}

export default page