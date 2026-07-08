import ProductCard from '@/components/ProductCard'
import React from 'react'
const plans = [
    { name: 'Pro Plan', price: '$29/mo', desc: 'Everything you need', color: {bg: 'bg-sky-500', text: 'text-sky-500'} },
    { name: 'Team Plan', price: '$79/mo', desc: 'For growing teams', color: {bg: 'bg-violet-500', text: 'text-violet-500' } },
    { name: 'Enterprise', price: '$199/mo', desc: 'Unlimited everything', color: {bg: 'bg-green-500', text: 'text-green-500' } },
]
const page = () => {
    return (
        <section className='my-auto mx-auto py-16 px-4 bg-gray-100'>
            <h2 className='text-3xl font-bold text-center text-gray-900'>Our Products</h2>
            <p className='text-center text-gray-500 mt-2 mb-10'>Find what you need</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-[80vw] '>
                {plans.map(plan => (
                    <ProductCard
                        key={plan.name}
                        plan={plan}
                    />
                ))}
            </div>
        </section>
    )
}

export default page