const ProductCard = ({ plan }) => {
    return (
        <div key={plan.name} className='h-fit flex flex-col items-center rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200'>
            {/* color stripe */}
            <div className={`h-10 ${plan.color.bg} w-full`} />
            {/* card content */}
            <p className='text-gray-900 font-bold '>{plan.name}</p>
            <p className={`text-gray-900 font-bold ${plan.color.text}`}>{plan.price}</p>
            <p className='text-gray-500'>{plan.desc}</p>
            <button className={`h-9 ${plan.color.bg} w-[90%]  text-white rounded-lg mt-20 mb-5  hover:scale-105 active:scale-95 hover:opacity-90 transition-all duration-200`}>Choose Plan</button>
        </div>
    )
}
export default ProductCard;