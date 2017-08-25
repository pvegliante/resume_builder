import React, {Component} from 'react';
import '../css/Pharmacy.css';


const addMore = (props, event) => {
    return(
    <div className="pht">
      <form className="cpt-fillout">
        <input className="inputBox" type="text" />
      </form>
      <div>
        <button onClick={addMore} className="btn">ADD MORE</button>
      </div>
    </div>
    );
    console.log('clicked');
    event.preventDefault;
}

class PharmacyTech extends Component{
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
        <div className="btn-container">
          <button className="btn" type="submit" onClick={addMore} >ADD MORE</button>
        </div>
      </div>
    )
    console.log(this);
  }
}

export default PharmacyTech;
