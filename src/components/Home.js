import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css';

class Home extends Component {
  render() {
    return (
    <div className="home-page">
      <div className="App-header">
        <h1>FVI Resume Builder</h1>
        <h3>Please Select your Class</h3>
        <div className="class-container">
          <li className="home-page-class-row">
            <NavLink activeClassName='active' to='/builder'>
              <button className="pct">Patient Care Technician</button>
            </NavLink>

            <NavLink activeClassName='active' to='/builder'>
              <button className="pt">Pharmacy Technician</button>
            </NavLink>

            <NavLink activeClassName='active' to='/builder'>
              <button className="ma">Medical Assistant</button>
            </NavLink>

            <NavLink activeClassName='active' to='/builder'>
              <button className="na">Nursing Assistant</button>
            </NavLink>

            <NavLink activeClassName='active' to='/builder'>
              <button className="hha">Home Health Aid (HHA)</button>
            </NavLink>

            <NavLink activeClassName='active' to='/builder'>
              <button className="mcb">Medical Coding and Billing</button>
            </NavLink>
          </li>
        </div>
      </div>
    </div>
    )
  }
}

export default Home;
