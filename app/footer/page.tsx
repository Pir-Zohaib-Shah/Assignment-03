import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div className='text-3xl'>Footer</div>
    <Link href={'/'}> go to Home</Link>
    </>
    )
}

export default Footer