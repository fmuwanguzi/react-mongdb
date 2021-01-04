import React from 'react';

const SingleWorkout = ({item}) => (
    <div>

        <h1>{item.name}</h1>
        <img src={item.picture} alt='image' />

    </div>

);

export default SingleWorkout;