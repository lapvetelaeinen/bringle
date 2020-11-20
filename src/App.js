import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import AddPerson from './components/addPerson';
import Nav from './components/nav';
import NewDelivery from './components/newDelivery';
import NotFound from './components/notFound';
import { customerList } from './functions/customerList';
import "./App.css";
import Stock from './components/stock';

class App extends Component {
  state = { 
    customers: customerList()
   }

  updateCustomers = (lista) => {
    this.setState({ customers: lista })
  }

  render() { 
    return (
      <React.Fragment>
      <main className="container">
        <Switch>
          <Route path="/add-person" render={() => <AddPerson update={this.updateCustomers} />}></Route>
          <Route path="/new-delivery" component={NewDelivery}></Route>
          <Route path="/stock" component={Stock}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect to="/new-delivery"></Redirect>
        </Switch>
      </main>
      <Nav/>
      </React.Fragment>
     );
  }
}
 
export default App;
