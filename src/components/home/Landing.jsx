import React, { Component } from 'react'

import SearchForm from './SearchForm'


class Landing extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = "container">
                <SearchForm/>
            </div>
            );
    }
}
 
export default Landing;