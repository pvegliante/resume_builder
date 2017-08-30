import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BuildButton extends Component {

handleClick(e) {
  window.location = "/resume";
  e.preventdefault(); //<--- make sure to refactor before pushing live
}

  render(){
    return(
      <div className="build">
          <button onClick={this.handleClick.bind(this)} type="submit" className="build_btn">BUILD</button>
      </div>
    );
  }
}

export default BuildButton;
