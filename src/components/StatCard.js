
function StatCard({ label, value, change, color }) {
    return (
        <div className='bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100'>
            <div className={`h-5 rounded-t-xl  w-full  ${color}`} />
            <p className='text-2xl font-bold text-gray-900 pl-4'>{value}</p>
            <p className='text-sm text-gray-400  pl-4'>{label}</p>
            <p className='text-xs text-green-500 font-bold pl-4'>{change}</p>
        </div>
    )
}
export default StatCard;