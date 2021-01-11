import React from 'react'
import Radium from 'radium'

const Person = (props) => {
    const mediaStl = {
        '@media (max-width: 500px)':{
            backgroundColor: 'red'
        }
    }
    return(
        <div style={mediaStl}>
            <h2 onClick={props.changeColour}>Hi I'm {props.name}</h2>
            <p>From another model</p>
            <input type="text" id={props.id} onChange={props.changeName}/>
            <button onClick={props.click} style={{backgroundColor: 'red', padding: '12px', borderRadius: '50%', cursor: 'pointer', marginLeft: '60px', color: 'white'}}>X</button>
        </div>
    )
}
export default Radium(Person);