import React, { Component } from 'react'


const UserInput = (props) => {
  return (
    <div className="input">
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )

}



export default UserInput
