import React from 'react'

export default function BlogItem(props) {
  return (
      <div className="card product-card shadow p-2 m-2">
          <img src={props.image} className="product-card-thumb img-fluid" alt="..." />
          <div className="card-body">
              <h5 className="card-title">{props.title.slice(0, 20)}</h5>
              <p className="card-text">{props.description.slice(0, 80)}</p>
              <a href="/" className="btn btn-primary">Read More</a>
          </div>
      </div>
  )
}
