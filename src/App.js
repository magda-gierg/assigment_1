import React, { Component } from 'react'
import './App.css'
import UserInput from './UserInput'
import UserOutput from './UserOutput'

class App extends Component {
state = {
  name: [
  {username: "Pink"},
  {username: "Olga"},
  {username: "Tim"}
]
}
switchNameHandler = () => {
  this.setState({
    name: [
    {username: "Blue"},
    {username: "Olga"},
    {username: "Tim"}
  ]
  })
}

changedNameHandler = (event) => {
  this.setState({
    name: [
    {username: "Blue"},
    {username: event.target.value},
    {username: "Tim"}
  ]
  })
}

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput name={this.state.name[0].username} click={this.switchNameHandler}/>
        <UserOutput name={this.state.name[1].username} changed={this.changedNameHandler} />
        <UserOutput name={this.state.name[2].username}/>
      </div>
    );
  }
}

export default App;
