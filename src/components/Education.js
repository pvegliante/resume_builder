import React, {Component} from 'react';

class Education extends Component{
  state = {
    textboxes: ['foo']
  }

  addTextbox = () => {
    this.setState({
      textboxes: [...this.state.textboxes, 'another one']
    })
  }

  render() {
    return(
      <div className="pht">
        <form className="cpt-fillout">
          <ul>
            {this.state.textboxes.map(textbox => (
              <li className="gena">
                <textarea className="inputBox" type="text" />
              </li>
            ))}
          </ul>
        </form>
        <div className="btn-container">
          <button className="btn" type="submit" onClick={this.addTextbox}>ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default Education;
