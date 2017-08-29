import React, {Component} from 'react';

class References extends Component {

  state = {
    references: ['foo']
  }

  addReference = () => {
    this.setState({
      references: [...this.state.references, 'another one']
    })
  }

  renderReferences = () => {
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
          <input type="url" />
        </form>
        </div>
      </div>
      )
    }

      render() {
        return(
          <div>
            {this.state.references.map(this.renderReferences)}
            <div className="btn-container">
              <button className="btn" type="submit" onClick={this.addReference}>ADD MORE</button>
            </div>
          </div>
          )
      }
}

export default References;
