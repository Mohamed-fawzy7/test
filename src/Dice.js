import React, { Component } from 'react'

export default class Dice extends Component {
    render() {
        return (
            <div className={this.props.animating? 'animate': null}>
                {this.props.num}
            </div>
        )
    }
}
