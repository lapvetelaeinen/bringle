import React, { Component } from 'react';
import Modal from "./modal";

class ModalButton extends Component {
  state = { 
    isOn: false
   }

handleState = (e) => {
  e.preventDefault();
  this.setState({ isOn: !this.state.isOn})
}


    render() {
       return (
        <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleState}>Sign</button>
        <Modal status={this.state.isOn} onClose={this.handleState}/>
        </React.Fragment>
        )}

    
}
 
export default ModalButton;