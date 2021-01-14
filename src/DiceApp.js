import React, { Component } from 'react'
import Dice from './Dice'

function getRandomDiceNumber(){
    return Math.floor(Math.random() * 6) + 1;
}

export default class DiceApp extends Component {
    state= {
        dice1: 1,
        dice2: 1,
        animating: false
    }
    handleRoll =  ()=>{
        this.setState({
            dice1: getRandomDiceNumber(),
            dice2: getRandomDiceNumber(),
            animating: true
        })
        setTimeout(() => {
            this.setState({animating: false});
        }, 1000);
    }
    render() {
        return (
            <div>
                <Dice num={this.state.dice1} animating={this.state.animating}/>
                <Dice num={this.state.dice2} animating={this.state.animating}/>
                <button onClick={this.handleRoll} disabled={this.state.animating} >roll</button>
            </div>
        )
    }
}
