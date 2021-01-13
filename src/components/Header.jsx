import React, { Component } from 'react';
import "../css/Header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav>
                <h1>{this.props.titre}</h1>
            </nav>
         );
    }
}
 
export default Header;