import React from 'react';

export default function ProductCard(props) {
    let product = props.product;
    // Add null checks to ensure product and thumbnail are defined
    if (!product || !product.thumbnail) {
        // If product or thumbnail is undefined, return null or a placeholder component
        return null; // Or return a placeholder component
    }
    return (
        <div className="card product-card shadow p-2">
            <img src={product.thumbnail} className="product-card-thumb img-fluid" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
