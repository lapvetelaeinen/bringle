import React, { Component } from 'react';
import './newCustomerForm.css';

class NewCustomerForm extends Component {
    state = {
        customer: {
            name: "",
            address: "",
            email: ""
        }
     }

     handleChange = e => {
        const customer = this.state.customer;
        customer[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ customer });
     }

     handleSubmit = (e) => {
        const customer = this.state.customer;
        const newList = [customer];
        if (localStorage.getItem('customers') === null) {
          localStorage.setItem('customers', JSON.stringify(customer));
          return;
        };
        const oldList = JSON.parse(localStorage.getItem('customers'));
        if (Array.isArray(oldList)) {
          localStorage.setItem('customers', JSON.stringify(newList.concat(oldList)));
          return;
        }
        newList.push(oldList);
        localStorage.setItem('customers', JSON.stringify(newList));       
      }

    render() { 
        return (
            <form name="register-person" onSubmit={this.handleSubmit}>
                    <div className="grid-container">
                        <p>Namn</p>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                        <p>Adress</p>
                        <input type="text" name="address" value={this.state.address} onChange={this.handleChange}/>
                        <p>Email</p>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <input type="submit" value="Lägg till"/>
                    </div>
            </form>
        );
    }
}
 
export default NewCustomerForm;