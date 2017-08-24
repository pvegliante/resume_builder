import React, {Component} from 'react';
import Home from './Home';
import Builder from './Builder';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
render() {
  return (
    <Router>
      <div className="app">
        <Nav  />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/builder' component={Builder} />
          <Route render={function() {
            return <h2>Not Found!</h2>;
          }} />
        </Switch>
      </div>
    </Router>
  )
 }
}

export default App;
