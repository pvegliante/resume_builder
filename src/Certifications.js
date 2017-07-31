import React, {Component} from 'react';
import './Pharmacy.css';



class Certifications extends Component{
  render() {
    return(
      <div className="pht">
        <form className="cpt-fillout">
          <input className="inputBox" type="text" />
        </form>
        <div>
          <button className="btn">ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default Certifications;
