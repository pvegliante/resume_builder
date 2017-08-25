import React, {Component} from 'react';
import '../css/StudentInfo.css';


class StudentInfo extends Component {
  render() {
    return(
      <div className="main">
        <form className="top-info">
          <div className="name">
            <h3>First Name :</h3>
              <input type="text" id="first_name"/>
            <h3>Last Name :</h3>
              <input type="text" id="last_name"/>
          </div>
          <div className="living">
            <h3>Address :</h3>
              <input type="text" id="address"/>
            <h3>City :</h3>
              <input type="text" id="city"/>
            <h3>State :</h3>
              <input type="text" id="state"/>
            <h3>Zip Code :</h3>
              <input type="text" id="zip_code"/>
          </div>
          <div className="person-info">
              <h3>Phone :</h3>
              <input type="text" name="" id="phone"/>
              <h3>Email :</h3>
              <input type="url" id="email"/>
          </div>
        </form>
      </div>
    );
  }
}

export default StudentInfo;
