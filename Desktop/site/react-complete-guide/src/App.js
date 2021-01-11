import React, { Component } from 'react'
import './App.css';
import Radium, { StyleRoot } from 'radium'
import Person from './Person/Person'
class App extends Component{
    state = {
      siblings: [
        { name: 'Ahmed', age: 24, id: 0},
        { name: 'Amina', age: 22, id: 1},
        { name: 'Manar', age: 13, id: 2},
        { name: 'Malika', age: 49, id: 3},
        { name: 'Hassen', age: 60, id: 4}

      ],
      showPeople: false
    };
    changeColour(e){
      e.target.style.color = 'yellow'
    }
    changeName = (e, index) => {
      const personIndex = this.state.siblings.findIndex(p => {
          return p.id === index
      })
      const person = this.state.siblings[personIndex]
      
      const people = [...this.state.siblings]
      people[personIndex].name = e.target.value
      console.log(this.state.siblings)
      this.setState({person: people})
   }
    showPeopleHandler(){
      const reverse = this.state.showPeople
      this.setState({showPeople: !reverse})
    }
    deletePerson = (index) => {
      //always keep immutability in mind
      const people = [...this.state.siblings];
      people.splice(index, 1)
      this.setState({siblings: people})
    } 
   render(){
     const btnStl = {
       padding: '10px 15px',
       backgroundColor: this.state.showPeople? 'red': 'green',
       color: 'white',
       border: 'none',
       borderRadius: '8px',
       fontWeight: '700',
       cursor: 'pointer',
       outline: 'none',
       ':hover': {
         backgroundColor: this.state.showPeople? 'salmon': 'lightgrey',
         color: 'black'
       }
     }
     const btnTitle = this.state.showPeople? 'Hide People': 'Show People'
     let persons = null
     if (this.state.showPeople){
       persons = this.state.siblings.map((comp, i) => {
        return <Person 
        key={i} 
        id={i} 
        name={comp.name}
        age={comp.age} 
        click={() => this.deletePerson(i)} 
        changeColour={this.changeColour} 
        changeName={(e) => this.changeName(e, i)}></Person>;
      })
     }
     
    return (
      <StyleRoot>
      <div className="App">
        <h1>React</h1>
        {persons}
        <button onClick={this.showPeopleHandler.bind(this)} style={btnStl}>{btnTitle}</button>
      </div>
      </StyleRoot>

      // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Another way of doing it'))
    );
   }
 
}

export default Radium(App);
