import React from 'react'
import { phoneServer } from '../data/phone-server'
import { PhoneCard } from '@/components/phone-card/phone-card'

 const About = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] gap-16 bg-gradient-to-r from-red-500 to-green -300'>
        {phoneServer.slice(1,4).map((item) => <PhoneCard key={item.id} {...item}/>)}</div>
  )
}
export default About
