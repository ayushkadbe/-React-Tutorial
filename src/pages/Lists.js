import React, { Component } from "react";

export default function Lists(){
    return(
        <>
            <Garage />

        </>
    );
}

function Car(props){
    //list attribute
    return <li>My car is {props.brand} </li>
}

function Bike(props){
    return <li>My bike is {props.brand}</li>
}

function Garage(){
    //array
    const cars = ['Ford', 'Audi', 'Mercedies', 'Tata'];
    const bikes = [
        {id: 1, brand: 'Apache'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Honda'}
      ];

    return (
        <>
            <h1>Cars in my Garage are:</h1>
            {/*LIST*/}
            <ul>
                {/*Render cars arry and pass it Car function*/}
                {cars.map((car)=> <Car brand={car} />)}
            </ul>

            {/*BIKE LIST */}
            <ul>
                {bikes.map((bike)=> <Bike key={bike.id} brand={bike.brand} />)}
            </ul>
        </>
    );
}