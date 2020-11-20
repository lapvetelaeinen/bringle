import React, { Component } from 'react';
import Button from './button';
import './calculator.css';

class Calculator extends Component {
    state = {
        input: "",
        currentValue: "",
        firstNumber: "",
        secondNumber: "",
        operator: "",
    }

    handleClick = value => {
        const operator = this.state.operator;

        if(!operator) {
        const input = this.state.input + value;
        this.setState({ input });
        return;
        };

        const input = this.state.input + value;
        this.setState({ input });
        const secondNumber = this.state.secondNumber + value;
        this.setState({ secondNumber });
    }

    handleOperator = (operator) => {
        const firstNumber = this.state.input;
        this.setState({ firstNumber });
        const newInput = operator;
        this.setState({ input: newInput });
        const currentOperator = operator;
        this.setState({ operator: currentOperator });

    }

    handleReset = () => {
        const input = "";
        this.setState({ input });
        const operator = "";
        this.setState({ operator });
    }

    handleEqual = () => {
        const ecvation = eval(`${this.state.firstNumber} ${this.state.operator} ${this.state.secondNumber}`);
        this.setState({ input: ecvation });
        const firstNumber = "";
        this.setState({ firstNumber });
        const secondNumber = "";
        this.setState({ secondNumber });
        console.log(ecvation);
    }

    render() { 
        return (
            <React.Fragment>
            <div className="calc-wrapper">
                <div className="resultbox">
                    <div className="reset-div" onClick={this.handleReset}><p className="reset">C</p></div>                  
                    <p className="result">{this.state.input}</p>
                </div>
                <div className="row">
                    <Button handleClick={this.handleClick}>7</Button>
                    <Button handleClick={this.handleClick}>8</Button>
                    <Button handleClick={this.handleClick}>9</Button>
                    <Button handleClick={this.handleOperator}>/</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.handleClick}>4</Button>
                    <Button handleClick={this.handleClick}>5</Button>
                    <Button handleClick={this.handleClick}>6</Button>
                    <Button handleClick={this.handleOperator}>*</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.handleClick}>1</Button>
                    <Button handleClick={this.handleClick}>2</Button>
                    <Button handleClick={this.handleClick}>3</Button>
                    <Button handleClick={this.handleOperator}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.handleClick}>.</Button>
                    <Button handleClick={this.handleClick}>0</Button>
                    <Button handleClick={this.handleEqual}>=</Button>
                    <Button handleClick={this.handleOperator}>-</Button>
                </div>
                <div className="ok">
                    <p onClick={() => this.props.sendResult(this.state.input)}>OK</p>
                </div>
            </div>
            {/* <div className="overlay-styles"></div> */}
            </React.Fragment>
        );
    }
}
 
export default Calculator
