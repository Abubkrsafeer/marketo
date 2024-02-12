import React from 'react'
import ProductCard from './ProductCard'
export default function LattestProducts() {
  return (
      <section className="category_section my-5">
          <div className="container">
              <div className="Categories_header text-center mb-3">
                  <h2>Lattest Products</h2>
                  <p>Lorem Ipsum goes In farans To get Knowledge</p>
              </div>
              <div className="categories_wrapper row">
                  <div className="col-md-6 col-lg-3">
                      <ProductCard />
                  </div>
                  
              </div>
          </div>
      </section>
  )
}
