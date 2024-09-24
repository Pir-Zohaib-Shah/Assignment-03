import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className='text-3xl'>Navbar</div>
    <Link href={'/'}> go to Home</Link>
    </>
  )
}

export default Navbar