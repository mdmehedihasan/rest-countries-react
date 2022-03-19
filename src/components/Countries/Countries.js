import { useEffect, useState } from 'react';
import React from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])
    return (

        <div>
            {
                <h1>Hi Countries: {countries.length}</h1>
            }

            <div className='countries-container' >
                {
                    countries.map(country => <Country
                        flags={country.flags.png}
                        population={country.population}
                        name={country.name.common}
                        area={country.area}
                    ></Country>)

                }</div>
        </div >
    );
};

export default Countries;