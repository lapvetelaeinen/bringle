import React, { Component } from 'react';
import { customerList } from '../functions/customerList';
import { deliveriesList } from '../functions/deliveriesList';
import './listOfCustomers.css';

class ListOfCustomers extends Component {
    state = { 
        customers: customerList()
    }

    deleteCustomer = (selectedCustomer) => {
        const customerList = this.state.customers;
        const updatedList = customerList.filter(customer => customer.name !== selectedCustomer);
        localStorage.setItem('customers', JSON.stringify(updatedList));
        this.setState({ customers: updatedList});
        this.deleteDeliveries(selectedCustomer);

    }

    deleteDeliveries = (specificCustomer) => {
        let deliveries = JSON.parse(localStorage.getItem('deliveries'));

        if (!Array.isArray(deliveries)) {
            const array = [JSON.parse(localStorage.getItem('deliveries'))];
            const filteredArray = array.filter(delivery => delivery.customer !== specificCustomer);
            localStorage.setItem('deliveries', JSON.stringify(filteredArray));
            return;
        }

        const filteredDeliveries = deliveries.filter(delivery => delivery.customer !== specificCustomer);
        localStorage.setItem('deliveries', JSON.stringify(filteredDeliveries));
    }

    render() { 
        return (
    <table className="table">
    <thead>
        <tr>
            <th>Namn</th>
            <th>Adress</th>
            <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {this.state.customers.map(customer =>
        <tr key={customer.name}>
        <td>{ customer.name}</td>
        <td>{ customer.address}</td>
        <td>{ customer.email}</td>
        <p className="delete" onClick={() => this.deleteCustomer(customer.name)}>Delete</p>
        </tr>)}
    </tbody>
    </table>
        );
    }
}
 
export default ListOfCustomers;

