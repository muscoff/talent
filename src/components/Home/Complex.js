import React from 'react';
import line from '../../images/line.png';

export default function Complex() {
  return (
    <div className="margin-top-20">
          <div className="width-70 margin-auto">
            <div className="row">
              <div className="col-3b">
                <div className="width-100 height-250 background-image-three"></div>
                <p className="center font-20">Complexity of research</p>
                <div className="yellow-dot margin-top-20"></div>
                <p className="font-13 margin-top-20 center">
                Companies are finding it harder and harder to find future talent who would join their teams: 
                the tools used and the services deployed do not match with the new reality of the labour market.
                </p>
              </div>
              <div className="col-3b height-250 background-image-two"></div>
              <div className="col-3b">
                <div className="width-100 height-250 background-image-one"></div>
                <p className="center font-20">Market overload</p>
                <div className="yellow-dot margin-top-20"></div>
                <p className="font-13 center margin-top-20">All recruiters are using the same methods to hire talent. 
                  Candidates are harassed by job offers that do not meet their expectations. 
                  They do not feel listened to and understood.
                </p>
              </div>
            </div>
            <div className="width-100"><img src={line} alt="" /></div>
            <div className="width-70 margin-auto">
              <p className="center margin-top-20 font-30">
                Talent at the <span className="yellow-text">heart of the recruitment process.</span>
              </p>
              <p className="center margin-top-20 font-20">
              HeyTalent reinvents recruitment by giving it a social dimension 
              and by making it more human-centered.
              </p>
            </div>
          </div>
        </div>
  )
}
