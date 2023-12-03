import React, { Component } from 'react'
import Mercury_animated from './Mercury_animated.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' src ={Mercury_animated} loading ="Mercury_animated"></img>
      </div>
    )
  }
}

export default Spinner
