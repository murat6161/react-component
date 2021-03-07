import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div style={{backgroundColor:'lightblue', display:'grid', height:'100vh', placeContent:'center'}}>
      <h1 style={{backgroundColor:"yellow", color:"blue"}}>Hello World!</h1>
      <h2 style={{color:"green"}}>And Hello React!!!</h2>

      <div className="ui container comments">
        <div className="ui card">
          <div className="comment">
            
            <a href="/" className="avatar"><img alt="avatar"/></a>
            <div className="content">
              <a href="/" className="author">Mark Who</a>
              <div className="metadata">
                <span className="date">07/12/2020</span>
              </div>
              <div className="text">What a nice blog!</div>
            </div>
          </div>
          <div className="extra content">
              <div className="ui two buttons">
                <div className="ui basic green button">Approve</div>
                <div className="ui basic red button">Reject</div>
          </div>
          </div>

        </div>

        
      </div>
      
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'))
