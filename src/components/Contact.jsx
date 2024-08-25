import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20}}
        transition={{ duration: 1.5 }}
        className=' my-10 text-4xl text-center'>Get in Touch</motion.h2>
        <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.5 }}
        className="text-center">
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            <p className='#'>{CONTACT.email}</p>
        </motion.div>
        </div>
  )
}

export default Contact