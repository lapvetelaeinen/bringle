import React, { Component } from 'react';
import Signature from "./signature";
import "./registerDelivery.css";
import "./modal.css";
import { customerList } from '../functions/customerList';
import { deliveriesList } from '../functions/deliveriesList';
import Select from 'react-select';
import { optionsCustomer } from '../functions/optionsCustomer';
import IndividualDeliveries from './individualDeliveries';
import Calculator from './calculator';
import { FaCalculator } from 'react-icons/fa';
import Calendar from 'react-calendar';




class RegisterDelivery extends Component {
  state = { 
    modalIsOpen: false,
    calculatorIsOpen: false,
    dateIsOpen: false,
    selectedField: "",
    delivery: {
      date: new Date(),
      customer: "",
      id: Math.random(),
      cPlus: "",
      cMinus: "",
      sPlus: "",
      sMinus: "",
      oPlus: "",
      oMinus: ""
    },
    customers: customerList(),
    customerOptions: optionsCustomer(),
    listOfDeliveries: [],
  }


     handleDate = e => {
       const delivery = this.state.delivery;
       delivery.date = e;
       this.setState({ delivery });
     }
  
     handleSelect = e => {
       const delivery = this.state.delivery;
       delivery.customer = e.value;
       this.setState({ delivery });
       const deliveries = deliveriesList(e.value);
       this.setState({ listOfDeliveries: deliveries });
       console.log(this.state.listOfDeliveries)
     }

     toggleModal = (e) => {
       e.preventDefault();
       this.setState({ modalIsOpen: !this.state.modalIsOpen});
       console.log(this.state.modalIsOpen)
     }

     toggleDate = (e) => {
       e.preventDefault();
       this.setState({ dateIsOpen: !this.state.dateIsOpen});
     }

     toggleCalculator = (e) => {
       e.preventDefault();
       this.setState({ calculatorIsOpen: !this.state.calculatorIsOpen});
       const selectedField = e.currentTarget.getAttribute('name');
       this.setState({ selectedField });
     }

     handleChange = e => {
       const delivery = this.state.delivery;
       delivery[e.currentTarget.name] = e.currentTarget.value;
       this.setState({ delivery }); 
     }

     handleSubmit = (e) => {
       const delivery = this.state.delivery;
       const newList = [delivery];
       if (localStorage.getItem('deliveries') === null) {
         localStorage.setItem('deliveries', JSON.stringify(delivery));
         return;
       };
       const oldList = JSON.parse(localStorage.getItem('deliveries'));
       if (Array.isArray(oldList)) {
         localStorage.setItem('deliveries', JSON.stringify(newList.concat(oldList)));
         return;
       }
       newList.push(oldList);
       localStorage.setItem('deliveries', JSON.stringify(newList));     
     }

     handleResult = (result) => {
       const delivery = this.state.delivery;
       const field = this.state.selectedField;
       delivery[field] = result;
       this.setState({ delivery });
       this.setState({ calculatorIsOpen: !this.state.calculatorIsOpen});
       
     }

    render() { 
        return (
          <main>
            <form name="register-delivery" onSubmit={this.handleSubmit}>
              <div className="select-customer-div">
                <div className="date-box" onClick={this.toggleDate}>
                  {JSON.stringify(this.state.delivery.date).slice(1,11)}
                </div>
                <Select
                className="select-customer"
                placeholder="Välj kund"
                options={this.state.customerOptions}
                onChange={this.handleSelect}
                />
              </div>
              <div className="headings">
                <h4 className="first-header">Returnerat</h4>
                <h4 className="second-header">Överlämnat</h4>
              </div>
              <div className="form-box">
                <p className="first-label">Containers in</p>
                <p className="second-label">Containers ut</p>
                <FaCalculator className="calculator-button" name="cPlus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="cPlus" id="cPlus" placeholder="Container in" value={this.state.delivery.cPlus} onChange={this.handleChange}/>
                <FaCalculator className="calculator-button" name="cMinus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="cMinus" id="cMinus" placeholder="Container ut" value={this.state.delivery.cMinus} onChange={this.handleChange}/>
              </div>
              <div className="form-box">
                <p className="first-label">Hyllor in</p>
                <p className="second-label">Hyllor ut</p>
                <FaCalculator className="calculator-button" name="sPlus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="sPlus" id="sPlus" placeholder="Hyllor in" value={this.state.delivery.sPlus} onChange={this.handleChange}/>
                <FaCalculator className="calculator-button" name="sMinus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="sMinus" id="sMinus" placeholder="Hyllor ut" value={this.state.delivery.sMinus} onChange={this.handleChange}/>
              </div>
              <div className="form-box">
                <p className="first-label">Skarvbitar in</p>
                <p className="second-label">Skarvbitar ut</p>
                <FaCalculator className="calculator-button" name="oPlus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="oPlus" id="oPlus" placeholder="Skarvbitar in" value={this.state.delivery.oPlus} onChange={this.handleChange}/>
                <FaCalculator className="calculator-button" name="oMinus" onClick={this.toggleCalculator}/>
                <input type="number" className="register-field" name="oMinus" id="oMinus" placeholder="Skarvbitar ut" value={this.state.delivery.oMinus} onChange={this.handleChange}/>
              </div>
              <div className="button-box">
                <button onClick={this.toggleModal}>Signera</button>
              </div>
              <div>
                {this.state.modalIsOpen
                  ? <React.Fragment>
                      <div className="overlay-styles" onClick={() => this.setState({ modalIsOpen: !this.state.modalIsOpen})}></div>
                      <div className="modal-styles">
                        <Signature/>
                        <input type="submit" value="Skicka" />
                      </div>
                    </React.Fragment>
                  : null
                }
              </div>
            </form>
                {this.state.calculatorIsOpen
                  ? <React.Fragment>
                      <div className="overlay-styles" onClick={() => this.setState({ calculatorIsOpen: !this.state.calculatorIsOpen})}></div>
                      <div className="modal-styles">
                        <Calculator sendResult={this.handleResult}/>
                      </div>
                    </React.Fragment>
                  : null
                }

                {this.state.dateIsOpen
                  ? <React.Fragment>
                      <div className="overlay-styles" onClick={() => this.setState({ dateIsOpen: !this.state.dateIsOpen})}></div>
                      <div className="modal-styles">
                        <Calendar onChange={this.handleDate}/>
                      </div>
                    </React.Fragment>
                  : null
                }
            <IndividualDeliveries deliveries={this.state.listOfDeliveries}/>
          </main>
         );
    }
}
 
export default RegisterDelivery;