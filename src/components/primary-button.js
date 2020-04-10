import React, { Component } from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background-color: transparent;
    color: rgb(0, 123, 255);
`;

class PrimaryButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onClick} className='btn btn-primary'>
                {this.props.children}
            </Button>
        );
    }
}

export default PrimaryButton;
