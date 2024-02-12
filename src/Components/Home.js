import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Header from './Header';
import Categories from './Categories';
import LattestProducts from './LattestProducts';
import CtaBanner from './CtaBanner';
import FeaturedSec from './FeaturedSec';
import Testimonials from './Testimonials';
import BlogsNews from './BlogsNews';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    // Fetch categories
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(categories => {
        setCategories(categories); // Set the state with the fetched categories
      })
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch products
    fetch('https://dummyjson.com/products/')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <Categories categories={categories} />
      <LattestProducts products={products.products} />
      <CtaBanner />
      <FeaturedSec ids={[12, 15]} />
      <Testimonials />
      <BlogsNews/>
    </div>
  );
}
