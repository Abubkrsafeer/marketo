import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Categories from './Categories'
import LattestProducts from './LattestProducts'
export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Categories/>
        <LattestProducts/>
    </div>
  )
}
