import React, { Component } from 'react'

export class Phone extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.phone);
    const { name } = this.props.phone;
    return (
      <div className='item'>
        {name}
      </div>
    )
  }
}

export default Phone