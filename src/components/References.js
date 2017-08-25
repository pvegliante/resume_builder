import React, {Component} from 'react';
import '../css/Pharmacy.css';
import '../css/References.css';

class References extends Component {
  render() {
    return(
      <div className="pht">
        <div className="ref">
        <form className="line_up">
          <h3>Name :</h3>
          <input type="text" />
        </form>
        <form className="line_up">
          <h3>Relation :</h3>
          <input type="text" />
        </form>
        <form className="line_up">
          <h3>Phone :</h3>
          <input type="text" />
        </form>
        <form className="line_up">
          <h3>Email :</h3>
          <input type="text" />
        </form>
        </div>
        <div className="btn-container">
          <button className="btn">ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default References;
