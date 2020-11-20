import React, { Component } from 'react';
import ListOfCustomers from './listOfCustomers';
import NewCustomerForm from './newCustomerForm';

class AddPerson extends Component {
    state = { 
        customer: {
            name: "",
            address: "",
            email: "",
        }
     }

    handleSubmit = e => {

        const name = this.state.customer.name;
        const address = this.state.customer.address;
        const email = this.state.customer.email;
        const customer = {
            "name": name,
            "address": address,
            "email": email
        };

        const stringedCustomer = JSON.stringify(customer);
        localStorage.setItem(this.state.customer.name, stringedCustomer);
        const customers = [];
        var i;
        for (i = 0; i < localStorage.length; i++) {
            const keyName = localStorage.key(i);
            const kund = localStorage.getItem(keyName);
            const parsedKund = JSON.parse(kund);

            if (!customers[keyName])
            customers.push(parsedKund);
        }
        this.props.update(customers);
    }

    handleChange = e => {
        const customer = {...this.state.customer};
        customer[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ customer }); 
    }

    render() { 
        
        return (
            <>
                <NewCustomerForm/>
                <ListOfCustomers/>
            </>
        );
    }
}
 
export default AddPerson;