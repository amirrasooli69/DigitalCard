import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";

import IphoneX from '../images/iphone-x.jpg';
import Iphone11 from '../images/iphone-11.jpg';
import Iphone12 from '../images/iphone-12.jpg';
import Iphone13 from '../images/iphone-13.jpg';
import s21 from '../images/s21.jpg';



class Cards extends Component {
    constructor() {
        super();
        this.state = {
                phoneData: [
                {id: 1, image:IphoneX, name:'IphoneX' , cost:'599 $'},
                {id: 2, image:Iphone11, name:'Iphone11' , cost:'699 $'},
                {id: 3, image:Iphone12, name:'Iphone12' , cost:'799 $'},
                {id: 4, image:Iphone13, name:'Iphone13' , cost:'899 $'},
                {id: 5, image:s21, name:'S21' , cost:'600 $'}    
            ]    
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={IphoneX} name='IphoenX' cost='599 $'/>
                <Card image={Iphone11} name='Iphoen11' cost='699 $'/>
                <Card image={Iphone12} name='Iphoen12' cost='799 $'/>
                <Card image={Iphone13} name='Iphoen13' cost='899 $'/>
                <Card image={s21} name='S21' cost='600 $'/> */}
                {this.state.phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost}/>)}
            </div>
        );
    }
}

export default Cards;