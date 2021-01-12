import React from 'react'

const Person = (props) => {
    return(
        <div>
            <h2 onClick={props.changeColour}>Hi I'm {props.name}</h2>
            <p>From another model</p>
            <input type="text" id={props.id} onChange={props.changeName}/>
            <button onClick={props.click} style={{backgroundColor: 'red', padding: '12px', borderRadius: '50%', cursor: 'pointer', marginLeft: '60px', color: 'white'}}>X</button>
        </div>
    )
}
export default Person;