import React, { Component } from 'react';

class Button extends Component {
    state = {  }

    render() { 
        return (
        <div className="button" onClick={() => this.props.handleClick(this.props.children)}>
            {this.props.children}
        </div>
        );
    }
}
 
export default Button;
