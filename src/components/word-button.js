import React, { Component } from 'react';
import styled from 'styled-components'

const Button = styled.button`
    background-color: transparent;
    color: #28a745;
    border-color: #28a745;
`;

class WordButton extends Component {
    render() {
        return (
            <Button onClick={this.props.onClick} className='btn btn-success'>
                {this.props.children}
            </Button>
        );
    }
}

export default WordButton;
