import React from 'react'

export default function CtaBanner() {
  return (
      <section className="Cta_sec min-400 d-flex justify-content-center flex-column align-items-center py-5">
          <div className="container z-9">
              <div className="row align-items-center py-5">
                  <div className="col-md-6">
                      <h1 className="fs-60 fw-700 pb-3">
                          <strong>Sale</strong>
                      </h1>
                      <p className="f-20">
                          Upto 60% Off
                      </p>
                  </div>
                  <div className="col-md-6">
                    <div className='button_wrapper text-end'>
                      <button className="f-20 btn btn-lg btn-secondary">
                          Shop Now
                      </button>
                    </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
