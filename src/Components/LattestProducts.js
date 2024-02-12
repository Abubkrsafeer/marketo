import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function LattestProducts(props) {
    // Initialize state to hold the products
    const [productsArray, setProductsArray] = useState([]);

    // Update productsArray when props.products changes
    useEffect(() => {
        setProductsArray(props.products);
    }, [props.products]); // Trigger the effect whenever props.products changes

    return (
        <section className="category_section my-5">
            <div className="container">
                <div className="Categories_header text-center mb-3">
                    <h2>Latest Products</h2>
                    <p>Lorem Ipsum goes In farans To get Knowledge</p>
                </div>
                <div className="categories_wrapper row">
                    {/* Check if productsArray is not undefined before mapping */}
                    {productsArray && productsArray.map(product => (
                        <div className="col-md-6 col-lg-3" key={product.id}>
                            {/* Pass product as a prop to ProductCard */}
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
