import React from 'react';

export default function MatchMaker() {
  return (
    <div className="match-makers margin-top-20">
            <div className="row">
              <div className="col-3b">
                <div className="width-80">
                  <p className="white-text center font-20">
                  You are a <span className="yellow-text">talent</span> looking for your dream job?
                  </p><br /> 
                  <p className="center white-text font-16">Exchange with a matchmaker that will take your aspirations and expectations into consideration. 
                    Get access to offers that match your aspirations and pick your ideal job</p><br />
                  <center><button className="margin-top-20 ghost">Discover the community</button></center>
                </div>
              </div>
              <div className="col-3b">
                <div className="width-80">
                  <p className="white-text center font-20">
                  You have a large network and you want to become a <span className="yellow-text">matchmaker</span>?
                  </p><br /> 
                  <p className="center white-text font-16">Get trained, receive all information needed to be certified online or in our offices. 
                  Start recruiting efficiently and receive commissions on your successful placements.</p><br />
                  <center><button className="margin-top-20 ghost">Start recruiting</button></center>
                </div>
              </div>
              <div className="col-3b">
                <div className="width-80">
                  <p className="white-text center font-20">
                  You are a <span className="yellow-text">company</span> looking for the perfect match?
                  </p><br /> 
                  <p className="center white-text font-16">Get access to a global talent network to help you find the ideal profile. 
                  Thanks to our innovative technology and our certified matchmakers, HeyTalent offers tailored recruitment services.</p><br />
                  <center><button className="margin-top-20 ghost">Discover our offer</button></center>
                </div>
              </div>
            </div>
        </div>
  );
}
