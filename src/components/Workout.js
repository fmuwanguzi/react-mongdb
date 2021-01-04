import React, { useState } from 'react';
import axios from 'axios';

export default class Workout extends React.Component{
    state = {
        loading: true,
        workout: null,
    };

    async componentDidMount(){
        const url = 'https://general-fit.herokuapp.com/workout'
        const response = await fetch(url);
        const data = await response.json();
        this.setState({workout: data[0] , loading: false })
        console.log(data[0].name);

    }

    render(){
        return(
            <div>
                {/* Will display loading and when it isn't it show a workout */}
                {this.state.loading || !this.state.workout ? (
                    <div> loading... </div> 
                    ) :(  
                    <div> 
                        <div> 
                            {this.state.workout.name}
                        </div>
                    </div> )}
            </div>
        )
    }


}

