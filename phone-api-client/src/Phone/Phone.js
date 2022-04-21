import React, { Component } from 'react'

export class Phone extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.phone);
    const { name, imageUrl } = this.props.phone;
    return (
      <div className='card'>
        <div className='ui tiny centered image'>
          <img className='' src={imageUrl} />
        </div>
        <div className='ui buttons'>
          <a className='ui button' href='#'>{name}</a>
        </div>
      </div>
    )
  }
}

export default Phone