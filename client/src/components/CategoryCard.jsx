import React from 'react'

const CategoryCard = () => {
  return (
    <div className='bg-[#bfe4e5] w-24 h-24 rounded-xl flex flex-col gap-2 justify-center items-center'>
        <img src="src/assets/category-icon.png" alt="" className='w-12'/>
        <p className='text-green1 font-medium'>Banner</p>
    </div>
  )
}

export default CategoryCard