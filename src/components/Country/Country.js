import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='countryApi bg-warning color-dark'>
            <h3>Country name:{props.name}</h3>
            <img src={props.flags} />
            <p>Area is : {props.area}</p>
            <p>Country Population:{props.population}</p>
        </div>
    );
};

export default Country;