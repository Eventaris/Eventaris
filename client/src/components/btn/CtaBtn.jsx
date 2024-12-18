import React from 'react'

const CtaBtn = () => {
  return (
    <div>
    <button className='bg-green2 inline-flex items-center gap-4 rounded-2xl w-auto px-9 py-4 hover:bg-green1 transition duration-300' onClick={() => window.location.href = "/login"}>
        <p className='text-white text-xl'>Get Started</p>
        <img src="src/assets/right arrow.png" alt="" className='w-8' />
    </button>
    </div>
  )
}

export default CtaBtn