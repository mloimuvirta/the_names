import React from 'react'
import nameData from '../data/names.json'
import { VictoryPie } from 'victory';
import './listing.css'
import {BrowserRouter as  Route, Link} from 'react-router-dom';
import Single from './Single'


class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            value_dd: "satunnainen" ,
            valueForm: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      
  handleChangeForm(event) {
    this.setState({valueForm: event.target.value});
    console.log(this.state.valueForm)
  }

  handleSubmit(event) {
    console.log(this.state.valueForm)
    alert(this.state.valueForm);
    

  }
      handleChange(event) {
        
        this.setState({value_dd: event.target.value})
    
        //Sorting the names randomly
        if(event.target.value_dd==="satunnainen") {
          var lista = this.shuffleRandom(nameData.names)
          return lista;
        }
        //Sorting the list in decreasing order due to amounts
        else if(event.target.value_dd==="määrä") {
          lista = nameData.names.sort((a, b) => b.amount - a.amount);
          return lista;
        } 
        //Sorting the list in alphapetical order
        else {
          lista = nameData.names.sort( (a, b) => this.compareNames(a.name , b.name)
          );
          return lista;
        }
      };
    
      //Sorting using math.random
      shuffleRandom(lista) {
       
        var ctr = nameData.names.length, temp, index;
    
        while(ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr --;
          temp = lista[ctr];
          lista[ctr] = lista[index];
          lista[index] = temp;
        } 
        return lista;
      }
    
       compareNames(a, b) {
        // Assuming you want case-insensitive comparison
        a = a.toLowerCase();
        b = b.toLowerCase();
        return (a < b) ? -1 : (a > b) ? 1 : 0;
      };
    
      sumAmounts(nameData) {
        for (var i=0; i<nameData.names.length; i++) {
           //nameData.names.amount[i];
          //console.log(nameData.names.amount[8])
        }
        var sum=0;
        if(typeof nameData == 'object'){
          nameData.names.forEach(names => {
              sum += parseFloat(names.amount);
          });
      }
        return sum;
      };
      
    render() {
        var values = this.state.valueForm
        return (<div className ="container">
            <div className="searchComp">
                  <form>
                    <input type="text" value={this.state.valueForm} onChange={this.handleChangeForm}></input>
                    
                      <Link to={`${this.state.valueForm}`}>
                        <button onClick={this.handleSubmit}>
                            search a name
                        </button></Link>
                      <Route path={`${this.state.valueForm}`} render={(props) => <Single {...props} data={nameData}/>}/>
                
                  </form>
                </div>   
            
          
          
            <div className="column left">
              <div className="dropdown-list">
                <form>
                  How to sort the data 
                <select value={this.state.value_dd} onChange={this.handleChange} className="dd-btn">
                  <option value_dd="satunnainen">Satunnianen järjestys</option>
                  <option value_dd="määrä">Määrien mukaan</option>
                  <option value_dd="aakkonen">Aakkosjärjestys</option>
                </select>
              </form>
              </div>
              
            {nameData.names.map((name) => { return <li>{name.name} ja {name.amount}</li>; })}
           </div>
           <div className="column right">
           <VictoryPie
           colorScale={["#f6f6f6", "#8ff7bc",  "#333333", "#990100","#d28efa", "#b90504", "#f7f28f", "#8fc0f7" ]}
            data = {nameData.names} x="name" y ="amount"
            innerRadius={80}
          />
           </div>
            </div>
    )
    } 
}

export default Listing
