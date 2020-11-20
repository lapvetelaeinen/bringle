import React, { Component } from 'react';
import Signature from "./signature";
import "./modal.css";


class Modal extends Component {
    state = {
        name: "",
        latestDelivery: "",
        stock: NaN,
        customers: []
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value})
    }
    handleDeliveryChange = (event) => {
        this.setState({ latestDelivery: event.target.value})
    }
    handleStockChange = (event) => {
        this.setState({ stock: event.target.value})
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.state.name;
        const delivery = this.state.latestDelivery;
        const stock = this.state.stock;
        const customer = {
            "name": name,
            "latestDelivery": delivery,
            "stock": stock
        };
        //const customerList = [];
        //customerList.push(customer);
        const stringedCustomer = JSON.stringify(customer);
        localStorage.setItem(this.state.name, stringedCustomer);
        const customers = [];
        var i;
        for (i = 0; i < localStorage.length; i++) {
            const keyName = localStorage.key(i);
            const kund = localStorage.getItem(keyName);
            const parsedKund = JSON.parse(kund);

            if (!customers[keyName])
            customers.push(parsedKund);
        }

        this.props.updateC(customers);
        
    }


    render() { 
        if (!this.props.status) return null

            return (
            <React.Fragment>
            <div className="overlay-styles"></div>
            <div className="modal-styles">
            <Signature/>
            <button onClick={this.props.onClose}>OK</button>
            </div>
            </React.Fragment>
         );
            }
    }


 
export default Modal;