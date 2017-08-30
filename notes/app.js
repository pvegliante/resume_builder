class App extends Component {

  state = {
      name: '',
    { names: [] };
  };//<-- initial state


  onFormSubmit = (evt) => {
    const names = [...this.state.names, this.state.name];
    this.setState({names: names, name: ''});
    evt.preventDefault();
  };

  //when ever a user does something on a wbe page they are generating an event

  onNameChange= (evt) => {
    this.setState({ name: evt.target.value });
  };

  render() {
    return(
      <div className="App">
        <h1>Sign up Sheet</h1>

          <form onSubmit={this.onFormSubmit}>
            <input
              placeholder="Name"
              value={this.state.name}//<-- makes the component and controlled component
              onChange={this.onNameChange}
            />

            <input type="submit"/>
          </form>
          <div>
            <h3>names</h3>
            <ul>
              { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
            </ul>
          </div>

      </div>
    );
  }
}
