import React from 'react'

const StepCard = () => {
  return (
    <div className='w-56 h-80 bg-green4 rounded-xl px-8 flex flex-col justify-center gap-6'>
        <div className='self-stretch justify-center items-center inline-flex'>
            <img src="src/assets/step1.svg" alt="" className='w-32'/>
        </div>
        <div>
            <p className='text-green1 text-4xl font-bold'>1.</p>
            <p className='text-green1 text-lg font-medium'>Browse what you need</p>
        </div>
    </div>
  )
}

export default StepCard