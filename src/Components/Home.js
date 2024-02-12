import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Categories from './Categories'
import LattestProducts from './LattestProducts'
import CtaBanner from './CtaBanner'
import FeaturedSec from './FeaturedSec'
import Testimonials from './Testimonials'
export default function Home() {
  return (
    <div>
        <Header />
        <Banner />
        <Categories />
        <LattestProducts />
        <CtaBanner/>
        <FeaturedSec/>
        <Testimonials/>
    </div>
  )
}
