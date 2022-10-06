import React, { Component } from 'react'
import '../styles/box.css'

class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: 'blue'
    }
  }

  handleClick = () => {
    this.setState((prevState) => ({
      if (prevState.backgroundColor === 'blue') {
        backgroundColor: 'red',
      } else if (prevState.backgroundColor === 'red') {
        backgroundColor: 'yellow',
      } else if (prevState.backgroundColor === 'yellow') {
        backgroundColor: 'blue'
      }
    }))
  }
        
  render() {
    return (
      <div>
        ColorBox
        <button
          type='button'
          className='box'
          style={{ backgroundColor: 'blue' }}
          onClick={this.props.handleClick}
          >
            Click me to change my color!
        </button>
      </div>
    )
  }
}

export default ColorBox;
