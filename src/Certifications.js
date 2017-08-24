import React, {Component} from 'react';
import './Pharmacy.css';



class Certifications extends Component{
  render() {
    return(
      <div className="pht">
        <form className="cpt-fillout">
          <ul>
            <li>
              <input className="inputBox" type="text" />
            </li>
          </ul>
        </form>
        <div>
          <button className="btn">ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default Certifications;
