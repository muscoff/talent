import React from 'react'

export default function Patch() {
  return (
    <div className="big-patch">
          <div className="row">
            <div className="col-33">
              <div className="width-80 margin-auto">
                <div className="def-flex">
                    <p className="capitalize font-12 white-text">HeyTalentInnovation</p>
                    <div className="box-padding-5 font-20 white-text">The matchmakers:</div><br/>
                    <p className="white-text font-25 margin-top-20">
                      A worldwide network of independent recruiters <span className="yellow-text">serving talent.</span>
                    </p>
                    <p className="white-text margin-top-20">
                    Human-centered, the aim of matchmakers is to create 
                    a local network of talent that they can activate when needed by 
                    connecting them to companies which offer the most suitable positions
                    </p>

                    <button className="ghost margin-top-20">become a matchmaker</button>
                </div>
              </div>
            </div>

            <div className="col-66">
              <div className="def-flex bg-silly-blue">
                <div className="row">
                  <div className="col-5 height-60vh border-right">
                    <div className="width-70">
                      <p className="capitalize white-text font-30">A global presence</p><hr />
                      <p className="margin-top-20 white-text font-14">
                      Matchmakers take care of the recruitment needs 
                      in their regions to better serve local companies and talent.
                      </p>
                    </div>
                  </div>
                  <div className="col-5 height-60vh">
                    <div className="width-70">
                        <p className="white-text font-30">Eficiency {'&'} quality</p><hr />
                        <p className="margin-top-20 white-text font-14">
                        Matchmakers take care of the recruitment needs 
                        in their regions to better serve local companies and talent.
                        </p>
                    </div>
                  </div>
                  <div className="col-5 height-60vh border-top border-right">
                    <div className="width-70">
                          <p className="white-text font-30">Innovation {'&'} technology</p><hr />
                          <p className="margin-top-20 white-text font-14">
                          A wide range of services and technologies to help them bring out the best candidates.
                          </p>
                    </div>
                  </div>
                  <div className="col-5 height-60vh border-top">
                    <div className="width-70">
                        <p className="white-text font-30">Human centered</p><hr />
                        <p className="margin-top-20 white-text font-14">
                        As true professionals, they deliver the best services to companies while taking 
                        into account the talent aspirations and expectations.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
