import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <>
    <div className='text-3xl'>About</div>
    <Link href={'/'}> go to Home</Link>
    </>
  )
}

export default About