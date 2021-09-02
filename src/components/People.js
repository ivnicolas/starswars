import React, { Component, useState, useEffect } from 'react';
import Homeworld from './Homeworld'


const People = (props) => {

    return (
        <div className="card">
            <img src = "https://picsum.photos/200/200" alt="Starwars Character Image"></img>
                <div className="container">
                    <h3><b>{props.info.name}</b></h3>
                    <Homeworld key={props.info.count} link={props.info.homeworld}/>
                </div>
        </div>
    );
};

export default People;

