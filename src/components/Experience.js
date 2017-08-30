import React, {Component} from 'react';

class Experience extends Component{

  state = {
    companies: ['foo']
  }

  addCompany = () => {
    this.setState({
      companies: [...this.state.companies, 'another one']
    })
  }

  renderCompany = () => {
    return (
      <div>
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
            <h3>Position:</h3>
            <input type="text"/>
          </form>
          <form className="dates_worked line_up">
            <h3>Start Date:</h3>
            <input className="worked_box box1" type="date"/>
            <h3>End Date:</h3>
            <input className="worked_box box2" type="date"/>
          </form>
        </div>
        <form className="cpt-fillout">
          <h3>Discription :</h3>
          <ul>
            <li>
              <textarea className="inputBox" type="text" />
            </li>
          </ul>
        </form>
      </div>
    )
  }

  render() {
    return(
      <div className="pht">
        {this.state.companies.map(this.renderCompany)}
        <div className="btn-container">
          <button className="btn exp_btn" type="submit" onClick={this.addCompany}>ADD MORE</button>
        </div>
      </div>
    );
  }
}

export default Experience;
