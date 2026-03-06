import React from 'react'
import StatCard from './StatCard'

export default function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <StatCard title="In-Progress" value="0" bgColor="bg-gradient-to-r from-[#422AD5] to-[#DB00FF]" />
        <StatCard title="Resolved" value="0" bgColor="bg-gradient-to-r from-[#54CF68] to-[#00827A]" />
    </div>
  )
}
