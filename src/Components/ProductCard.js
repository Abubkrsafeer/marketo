import React from 'react'
import PropTypes from 'prop-types'
export default function ProductCard(props) {
  return (
      <div className="card product-card shadow p-2">
          <img src={props.image} className="product-card-thumb img-fluid" alt="..." />
              <div className="card-body">
                  <h5 className="card-title">{props.title}</h5>
                  <p className="card-text">{props.description}</p>
                  <a href="/" className="btn btn-primary">Go somewhere</a>
              </div>
      </div>
  )
}
// PropTypes
ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

// Set default props
ProductCard.defaultProps = {
    title: "Title1",
    description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    image: "/Assets/falback-product.jpg"
};