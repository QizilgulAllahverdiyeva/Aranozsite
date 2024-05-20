import React from 'react'
import WoodSofa from './components/WoodSofa'
import AweSome from './components/AweSome'
import BestSellers from './components/BestSellers'
import Subscribe from './components/Subscribe'

const Home = () => {
  return (
    <div>
        <WoodSofa/>
        <AweSome/>
        <BestSellers/>
        <Subscribe/>
    </div>
  )
}

export default Home