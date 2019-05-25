import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';
import Script from '../script/script'; 


class Navbar extends Component {
  constructor(props){
    super(props);
    this.script = new Script();
  }

  check(e){
    e.preventDefault();
    if(e.keyCode === 13){
      this.script.search();
    }
  }
  render() {
    return (
      <div>
        <input type="text" id="search" onKeyUp={this.check.bind(this)}/>
      </div>
    );
  }
}

export default Navbar;

// export default function Navbar() {
//   return (
//     <React.Fragment>
//       <div className="search">
//       <div className="right"><NavLink to="contact" className="left-right-10 contact">Contact</NavLink></div>
//         <div className="wd-40 right">
//           <input type="text" id="search" className="control" />
//         </div>
//       </div>
//     <div className="coral">
//       <div className="navbar center">
//         <ul>
//             <li><NavLink to='/'>Home</NavLink></li>
//             <li><NavLink to='/about'>About</NavLink></li>
//             <li><NavLink to='/service'>Services</NavLink></li>
//             <li><NavLink to='/contact'>Contact Us</NavLink></li>
//         </ul>
//       </div>
//     </div>
//     </React.Fragment>
//   );
// }
