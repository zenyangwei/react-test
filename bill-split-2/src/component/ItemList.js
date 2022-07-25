import React, { Component } from 'react'

class ItemList extends Component {

    constructor(){
        super();
        this.state = {
            userName: ['User 1']
        }
    }

  render(){
    return (
        <div>
            <p>
            {this.state.userName}
            </p>
        </div>
      )
  }
    
}

export default ItemList