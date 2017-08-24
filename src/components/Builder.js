import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import PharmacyTech from './PharmacyTech';
import Education from './Education';
import Certifications from './Certifications';
import Experience from './Experience';
import References from './References';
import Build_Button from './Build_Button';
import logo from '../logo.svg';
import '../css/App.css';

class Builder extends Component {

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>Welcome to FVI Resume Builder</h2>
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
          <Build_Button/>

        </div>
      </div>
    );
   }
}

export default Builder;
