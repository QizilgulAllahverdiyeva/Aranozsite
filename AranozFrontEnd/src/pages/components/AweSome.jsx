import React from 'react'
import './style.css'

const AweSome = () => {
  return (
   <section className='aweSome'>
    <div className='flex justify-center align-items-center'>
    <h1 className='aweSomeH1'>Awesome</h1>
    <h2 className='ShopH2'>Shop</h2>
    </div>
    <div>
    <p>Next</p>
    <div className="border-black"></div>
    <p>Previous</p>
    </div>
   </section>
  )
}

export default AweSome