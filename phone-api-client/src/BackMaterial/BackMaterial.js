import React, { Component } from 'react'

export class BackMaterial extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.phone);
    const { name } = this.props.backMaterial;
    return (
      <div className='item'>
        {name}
      </div>
    )
  }
}

export default BackMaterial