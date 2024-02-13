import React from "react";

export default function Banner(props) {
  return (
    <section className="banner-sec-main d-flex justify-content-center flex-column align-items-center py-5">
      <div className="container z-9">
        <div className="row align-items-center fy-5">
          <div className="col-md-12">
            <h1 className="fs-60 fw-700 pb-3">
              <strong>{props.title}</strong>
            </h1>
            <p className="f-20">
             {props.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
