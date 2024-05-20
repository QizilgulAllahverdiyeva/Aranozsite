import React, { useContext, useEffect } from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsContext'

const AweSome = () => {
  const { data, setData, filter, setFilterData } = useContext(ProductsContext)
  const navigate = useNavigate()
  const getAllData = async () => {
    const res = await axios("http://localhost:5000/furnitures")
    setData(res?.data)
    setFilterData(res?.data)
  }

  useEffect(() => {
    getAllData();
  }, [])

  return (
   <section className='aweSome'>
    <div className='flex align-items-center'>
    <h1 className='aweSomeH1'>Awesome</h1>
    <h2 className='ShopH2'>Shop</h2>
    </div>
    <div className='datas'>
        {
          filter.map((elem) => (
            <div className='productDiv' key={elem._id}>
              <img className='imgProduct' src={elem.img} alt="" />
              <br />
              <div className='productBody'>
              <p>{elem.title}</p>
              <p>{elem.price}$</p>
              <button onClick={()=>navigate(`/${elem._id}`)}>READ MORE</button>
              </div>
            </div>
          ))
        }
        </div>
   </section>
  )
}

export default AweSome