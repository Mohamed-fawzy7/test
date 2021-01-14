import React, { Component } from 'react'

export default class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        let balls = Array(this.props.numBalls).fill(null).map(() => Math.floor(Math.random() * this.props.maxNum) + 1);
        this.state = {
            balls
        }
    }
    generate = () => {
        let balls = Array(this.props.numBalls).fill(null).map(() => Math.floor(Math.random() * this.props.maxNum) + 1);
        this.setState({ balls });
    };
    render() {
        return (
            <div>
                {this.props.title}
                {this.state.balls.map(num => <span>{num}</span>)}
                <button onClick={this.generate}>Generate</button>
            </div>
        )
    }
}
