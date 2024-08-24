import React from 'react'
import { CONTACT } from '../constants'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h2 className=' my-10 text-4xl text-center'>Get in Touch</h2>
        <div className="text-center">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='#'>{CONTACT.email}</p>
        </div>
        </div>
  )
}

export default Contact