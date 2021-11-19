import React, { Component } from 'react';

import styles from './Search.module.css'

class Search extends Component {
    constructor () {
        super();
        this.state = {
            text: ""
        };
    }

changeHandler = Event => {
        this.setState({
            text: Event.target.value,
        }) 
    }
    render() {
        const {text}= this.state;
        return (
            <div className={styles.container}>
                <p>Search what do you want</p>
                <div>
                    <input type='text' value={text} placeholder='Search ...' onChange={this.changeHandler}/>
                    <br/>
                    <br/>
                    <span>{text}</span>
                </div>
                
            </div>
        );
    }
}

export default Search;