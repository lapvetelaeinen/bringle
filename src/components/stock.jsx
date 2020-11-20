import React, { Component } from 'react';
import { customerList } from '../functions/customerList';
import { deliveriesList } from '../functions/deliveriesList';

class Stock extends Component {
    state = {
        accounts: [],
        tempAccount: {
            name: "",
            containers: "",
            shelves: "",
            other: "",
        }
    }



    componentDidMount() {
        const customers = customerList();
        customers.map(customer => {
            const newAccount = {
                name: customer.name,
                containers: 0,
                shelves: 0,
                other: 0,
            };
            const accounts = this.state.accounts;
            accounts.push(newAccount);
            this.setState({ accounts });

            const deliveries = deliveriesList(customer.name);
            deliveries.map(delivery => {
                const accounts = this.state.accounts;
                const targetAccount = accounts.find(account => account.name === delivery.customer);
                targetAccount.containers += parseInt(delivery.cPlus - delivery.cMinus);
                targetAccount.shelves += parseInt(delivery.sPlus - delivery.sMinus);
                targetAccount.other += parseInt(delivery.oPlus - delivery.oMinus);

                let index = accounts.indexOf(delivery.customer);
                accounts[index] = targetAccount;
                this.setState({ accounts });

            })

        })

    }

    render() { 
        return (
            <>
                <table className="table">
                <thead>
                    <tr>
                        <th>Namn</th>
                        <th>Containers</th>
                        <th>Hyllor</th>
                        <th>Skarvbitar</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.accounts.map(account =>
                    <tr key={ account.name }>
                    <td>{ account.name}</td>
                    <td>{ account.containers}</td>
                    <td>{ account.shelves}</td>
                    <td>{ account.other}</td>
                    </tr>)}
            
                </tbody>
                </table>
                <h1>{this.state.list}</h1>
            </>
        );
    }
}
 
export default Stock;