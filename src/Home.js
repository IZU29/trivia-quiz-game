import React from 'react'

export default function Home(props){
    return (
     
        <div className='centre'>
        <h2>Quizzical</h2>
        <p>Random Questions For My Solo Project</p>
        <button onClick={props.change}>Start Game</button>
        </div>
       
    )
}