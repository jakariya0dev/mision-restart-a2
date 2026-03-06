import React from 'react'

export default function StatCard({title, value, bgColor}) {
  return (
    <div className={`flex flex-col justify-center items-center text-white py-14 rounded-lg ${bgColor}`}>
        <p className='text-2xl font-semibold mb-2'>{title}</p>
        <p className='text-3xl font-bold'>{value}</p>
    </div>
  )
}
