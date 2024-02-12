import React from 'react'
import ProductCard from './ProductCard'
export default function FeaturedSec() {
  return (
      <section className="min-400 d-flex justify-content-center flex-column align-items-center py-5">
          <div className="container z-9">
              <div className="row align-items-center py-5">
                  <div className="col-md-6">
                   <div className='featured_category_wrapper position-relative'>
                    <div className='featured_sec_image'>
                        <img src='Assets/falback-product.jpg' alt="featured" className='img-fluid' />
                    </div>
                    <div className='featured_sec_content position-absolute bottom-0 left-0 ms-5 mb-5'>
                        <div className='featured_sec_title'>
                            <h3>Suits</h3>
                        </div>
                        <div className='featured_sec_desc'><p>Lorem Ipsum</p></div>
                    </div>
                   </div>
                  </div>
                  <div className="col-md-6">
                      <div className="Title_header text-center mb-3">
                          <h2>Popular Items  Trending Now</h2>
                          <p>Lorem Ipsum goes In farans To get Knowledge</p>
                      </div>
                    <div className='d-flex flex-wrap'>

                      <div className='button_wrapper mx-1'>
                        <ProductCard />
                      </div>
                      <div className='button_wrapper mx-1'>
                        <ProductCard />
                      </div>
                    </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
