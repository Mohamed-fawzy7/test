import React, { Component } from 'react'

export default class CoinFlipper extends Component {
    state = {
        flip: ''
    }
    tails = 0;
    heads = 0;
    flip = ()=>{
        let flip = Math.random() >= 0.5 ? 'head' : 'tail';
        console.log(flip);
        if(flip === 'tail'){
            this.tails++
        }  else if (flip === 'head'){
            this.heads++;
        }
        this.setState({flip});
    }
    render() {
        return (
            <div>
                {this.state.flip === 'head' && <img src="https://tinyurl.com/react-coin-heads-jpg" alt="head" />}
                {this.state.flip === 'tail' && <img src="https://www.govmint.com/media/catalog/product/cache/daa9fcb3626fb352519f90131abc98d6/1/8/1878-p-morgan-silver-dollar-8tf-xf_228763_2.jpg" alt="tail" />}
                <button onClick={this.flip}>Flip</button>
                <div>out of {this.tails + this.heads} flips, there are {this.heads} heads, and {this.tails} tails</div>
            </div>
        )
    }
}
