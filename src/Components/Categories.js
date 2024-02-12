import React from "react";
import CategoryItem from "./CategoryItem";
export default function Categories() {
  return (
    <section className="category_section my-5">
      <div className="container">
        <div className="Categories_header text-center mb-3">
          <h2>Popular Categories</h2>
          <p>Lorem Ipsum goes In farans To get Knowledge</p>
        </div>
        <div className="categories_wrapper row">
          <div className="col-md-2">
            <CategoryItem />
          </div>
          <div className="col-md-2">
            <CategoryItem />
          </div>
          <div className="col-md-2">
            <CategoryItem />
          </div>
          <div className="col-md-2">
            <CategoryItem />
          </div>
          <div className="col-md-2">
            <CategoryItem />
          </div>
          <div className="col-md-2">
            <CategoryItem />
          </div>
        </div>
      </div>
    </section>
  );
}
