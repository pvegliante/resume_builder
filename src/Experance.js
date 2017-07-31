import React, {Component} from 'react';
import './Pharmacy.css';
import './Experance.css';



class Experance extends Component{
  render() {
    return(
      <div className="pht">
        <div className="company">
          <form className="company_name line_up">
            <h3>Company Name:</h3>
            <input type="text"/>
          </form>
          <form className="company_city line_up">
            <h3>Company City:</h3>
            <input type="text"/>
          </form>
          <form className="company_state line_up">
            <h3>Company State:</h3>
            <input type="text"/>
          </form>
          <form className="title line_up">
            <h3>Title:</h3>
            <input type="text"/>
          </form>
          <form className="dates_worked line_up">
            <h3>Dates Worked:</h3>
            <input className="worked_box box1" type="number"/> - <input className="worked_box box2" type="number"/>
          </form>
        </div>
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

export default Experance;
