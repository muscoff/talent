import React, { Component } from 'react';
import long from '../../images/long.png';
import '../../App.css';
import Nav from '../Nav';
import Brief from '../Brief';
import Top from '../Top';
import Join from '../Join';
import BriefContent from './BriefContent';
import Thank from './Thank';
import LongContent from './LongContent';
import MatchMaker from './MatchMaker';
import Complex from './Complex';
import Patch from './Patch';

class Home extends Component {
  render() {
    return (
      <div>
        <Top backgroundImage="top-background-image">
        <Nav />
          <Brief>
            <BriefContent />
          </Brief>
        </Top>

        <Thank />
      
        <div className="long-info">
          <img src={long} alt="" />
        </div>

        <LongContent />

        <MatchMaker />

        <div className="margin-top-20">
          <p className="center grey-text font-12">Recruit differently</p>
          <p className="center font-30">Why reinventing recruitment?</p>
        </div>

        <Complex />

        <div className="width-100 height-20vh"></div>

        <Patch />

        <div className="width-100 height-20vh">
          <div className="full flex-column">
            <p className="center font-50">Heytalent, <span className="yellow-text">Heysuccess</span> Community</p>
          </div>
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
              <button className="button">Sign up now</button>
        </Join>
      </div>
    );
  }
}

export default Home;