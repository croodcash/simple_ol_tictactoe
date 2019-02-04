import React, { Component } from 'react';
import './Header.css';
import logo from './logo.svg';

class Header extends React.Component{
    
    render(){
        return (
            <img src={logo} className="App-logo" alt="logo" />
        );
    }
        
}


export default Header;