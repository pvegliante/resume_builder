import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import PharmacyTech from './PharmacyTech';
import Education from './Education';
import Certifications from './Certifications';
import Experience from './Experience';
import References from './References';
import BuildButton from './BuildButton';
import { NavLink } from 'react-router-dom';

class Builder extends Component {
  render() {
    return (
      <div>
        {/* remove NavLink and make Link
            style link to look like button */}
        <div className="App-header">
          <h1>FVI Resume Builder</h1>
          <NavLink exact activeClassName='active' to='/'>
            <button className="home-btn">Home</button>
          </NavLink>
        </div>
        <div>
            <StudentInfo />

        </div>

        <div>
          <h2>Certified Pharmacy Technician</h2>
        </div>
        <div>
          <PharmacyTech/>

        </div>
        <div>
          <h2>Education and Credentials</h2>
        </div>
        <div>
          <Education/>

        </div>
        <div>
          <h2>Certifications</h2>
        </div>
        <div>
          <Certifications/>

        </div>
        <div>
          <h2>Experience</h2>
        </div>
        <div>
          <Experience/>

        </div>
        <div>
          <h2>References</h2>
        </div>
        <div>
          <References/>

        </div>
        <div>
          <BuildButton/>

        </div>
      </div>
    );
   }
}

export default Builder;
