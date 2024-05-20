import React from 'react'
import sofa from '../../assets/banner_img.png'
import './style.css'

const WoodSofa = () => {
    return (
        <section className='woodSofa'>
            <div>
                <h1 className='woodH1'>Wood & Cloth Sofa</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore, quam, 
                    eum quasi mollitia ducimus illum dignissimos suscipit </p>
                    <button>Buy Now</button>
            </div>
            <img src={sofa} alt="" />
            <h1 className='number'>03</h1>
        </section>
    )
}

export default WoodSofa