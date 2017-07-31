import React, { Component } from 'react';
import StudentInfo from './StudentInfo';
import PharmacyTech from './PharmacyTech';
import Education from './Education';
import Certifications from './Certifications';
import Experance from './Experance';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to FVI Resume Builder</h2>
        </div>
        <div>
            <StudentInfo>

            </StudentInfo>
        </div>

        <div>
          <h2>Certified Pharmacy Technician</h2>
        </div>
        <div>
          <PharmacyTech>

          </PharmacyTech>
        </div>
        <div>
          <h2>Education and Credentials</h2>
        </div>
        <div>
          <Education>

          </Education>
        </div>
        <div>
          <h2>Certifications</h2>
        </div>
        <div>
          <Certifications>

          </Certifications>
        </div>
        <div>
          <h2>Experance</h2>
        </div>
        <div>
          <Experance>

          </Experance>
        </div>

      </div>
    );
  }
}

export default App;
