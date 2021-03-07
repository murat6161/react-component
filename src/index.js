import React from 'react'
import ReactDOM from 'react-dom'
import ApproveCard from './components/ApproveCard'

const App = () => {
  return (
    <div style={{backgroundColor:'lightblue', display:'grid', height:'100vh', placeContent:'center'}}>
      <h1 style={{backgroundColor:"yellow", color:"blue"}}>Hello World!</h1>
      <h2 style={{color:"green"}}>And Hello React!!!</h2>

      <div className="ui container comments">
      <ApproveCard name="Mark" date="07/05/2020" comment="What a beautiful piece"/>
      <ApproveCard name="Alan" date="01/01/2021" comment="What a beuatiful picture"/>
      <ApproveCard name="Bob" date="06/20/2020" comment="What a nice piece"/>
      
        
      </div>
      
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
