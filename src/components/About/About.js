import React, { Component } from 'react';
import '../../App.css';
import Top from '../Top';
import Nav from '../Nav';
import Brief from '../Brief';
import BriefContent from './BriefContent';
import Join from '../Join';

class About extends Component {
  render() {
    return (
      <div>
        <Top backgroundImage="about-background-image">
            <Nav />
            <Brief>
                <BriefContent />
            </Brief>
        </Top>
        <div className="width-70 height-20vh margin-auto full flex-column bg-black">
            <p className="font-30 center white-text">
            HeyTalent is about finding the right <span className="yellow-text capitalize">talent</span> for the right job
            </p>
        </div>

        <div className="width-100 height-40vh">
            <p className="font-30 margin-top-20 padding-20">About our <span className="yellow-text">cooptation program</span></p>
            <p className="font-16 padding-20 fade-text-end">
                If one of our Matchmakers has already qualified you for a job and you have answered the survey
                and confirm that you wanted to join Heytalent's Global Co-op Network, you can sponsor the CV of
                candidate you know for one of the positions open to cooptaiton listed in the monthly newsletter
                Heytalent if we place your candidate(s) under 4 months, you will receive 500$ for the first
                placement in the year, 750$ for the second placement in the year, 1000$ for the third placement
                in the year, and 1000$ for the fourth and so on, In parallel with your current job, enjoy helping
                engineers you know to get the best mission or job because of your connection with HeyTalent international
                network, it is also a guarantee for you to be informed in real time of most of mission opportunities
                currently available.
            </p>
        </div>
        <Join backgroundImage="join-background-image">
        <p className="white-text font-50">Join <span className="yellow-text">Heytalent</span> community!</p>
              <p className="white-text center font-20 margin-top-20">
              HeyTalent helps talent land their dream job while being 
              assisted by our global network of matchmakers.
              </p>
              <p className="white-text font-20 margin-top-20 center">
              Our matchmakers will assist talent throughout their career by following the job market trends and 
              reaching out to talent for new job opportunities meeting their expectations.
              </p>
              <button className="margin-top-20 ghost">Sign up now</button>
        </Join>
      </div>
    );
  }
}

export default About;