import React from 'react';
import './App.css';
import nameData from './data/names.json'
import Listing from './components/Listing'
import Single from './components/Single'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      vaihto: false
    }
    
    this.setState({data: nameData});
  }

//<Route path='/single' render = {() => <Single {...this.state.value} data={this.state.value} />} />
  //
  render () {
    return (
      <div className="App">
      <div className="header">
              <h1>THE NAME DATA</h1>
            
            </div>
            
            
  
            <Router>
              <Switch>
                <Route exact path='/' render={
              (props) => <Listing {...props} data={this.state.data}/>}/>
                <Route path={'/'} render={(props) => <Single {...props} data={this.state.valueForm}/>}/>
              </Switch>
            </Router>  
      </div>
    );
  }
  
}

export default App;
