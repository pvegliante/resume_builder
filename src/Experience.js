import React, {Component} from 'react';
import './Pharmacy.css';
import './Experance.css';



class Experience extends Component{
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
            <input className="worked_box box1" type="text"/> - <input className="worked_box box2" type="text"/>
          </form>
        </div>
        <form className="cpt-fillout">
          <h3>Discription :</h3>
          <ul>
            <li>
              <input className="inputBox" type="text" />
            </li>
          </ul>
        </form>
        <div>
          <button className="btn exp_btn">ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default Experience;
