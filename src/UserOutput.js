import React, { Component } from 'react'

const UserOutput = (props) => {
  return (
    <div>
      <p onClick={props.click}>I am a robot and my name is {props.name}.</p>
      <p>I like butterflies.</p>
    </div>

  )
}



export default UserOutput
