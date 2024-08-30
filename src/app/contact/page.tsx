import React from 'react'
import { phoneServer } from '../data/phone-server'
import { PhoneCard } from '@/components/phone-card/phone-card'

 const Contact = () => {
  return (
    <div className='flex  items-center justify-center h-[100vh] gap-20'>
        {phoneServer.slice(0,2).map((item) => <PhoneCard  key={item.id} {...item}/> )}
    </div>
  )
}
export default Contact