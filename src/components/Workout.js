import React, { Component } from 'react';

import axios from 'axios';
import SingleWorkout from './SingleWorkout'

class Workout extends Component {
    constructor(props){
        super(props);
        this.state = {
            workouts: []
        };
    }


    componentDidMount(){
        const url = 'https://general-fit.herokuapp.com/workouts';
        axios.get(url)
        .then((response) => {
            this.setState({
                workouts: response.data
            })
        })
        .catch((error)=> console.log(error))
    }

    renderAll(){
        return this.state.workouts.map((item)=> (
            <SingleWorkout key={item.name} item={item}/>
        ));
    }

    render(){
        return <div>
            {this.renderAll()}
                </div>
    }
}

export default Workout;

