import React from 'react'
import Banner from './Banner'
import Header from './Header';
import Testimonials from './Testimonials';
export default function About() {
  return (
    <>
          <Header />
    <Banner title="About" description="Lorem Ipsum"/>
          <Testimonials />
    </>
  )
}
