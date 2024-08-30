import React from 'react'
import { phoneServer } from './data/phone-server'
import { PhoneCard } from '@/components/phone-card/phone-card'

export const PhoneCatigory = () => {
  return (
    <div className="flex gap-10 ">
    {phoneServer.map(item => <PhoneCard
      key={item.id}
      {...item}
    />
    )}
  </div>
  )
}
