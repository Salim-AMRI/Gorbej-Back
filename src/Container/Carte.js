import React, { Component } from 'react';
import Food from '../Components/food'
import Foot from '../Components/foot';

export class Carte extends Component {
    render() {
        return (
            <div>
                <Food />
                <Foot/>
            </div>
        )
    }
}

export default Carte
