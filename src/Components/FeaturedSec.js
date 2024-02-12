import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

export default function FeaturedSec(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on props.ids
    const fetchProducts = async () => {
      try {
        const productsData = await Promise.all(
          props.ids.map(async id => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const productData = await response.json();
            return productData;
          })
        );
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [props.ids]); // Trigger the effect whenever props.ids changes

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
              <h2>Popular Items Trending Now</h2>
              <p>Lorem Ipsum goes In farans To get Knowledge</p>
            </div>
            <div className='d-flex flex-wrap'>
              {/* Render ProductCard components based on fetched products */}
              {products.map(product => (
                <div className='button_wrapper' key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
