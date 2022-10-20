import React, { Component } from 'react';


export default function Conditionals(){
    return(
        <>
            <MyGarage cars= {cars} />  {/*PASSING data/cars array to function*/}

            <Goal isGoal={true} /> 
        </>
    );
}
const cars = ['Ford', 'BMW', 'Audi'];

function MyGarage(props) {   //function
    const cars = props.cars;  //prop attribute props.cars
    
    return (
      <>
      
        <h1>MyGarage</h1>
        {cars.length > 0 &&         //conditionals logic
          <h2>
            You have {cars.length} cars in your garage.    {/*calling prop*/}
          </h2>
        }
      </>
    );
  }
  
function MissedGoal() {
    return <h1>MISSED!</h1>;
}

function MadeGoal() {
    return <h1>GOAL!</h1>;
}

function Goal(props){
    const isGoal = props.isGoal;  //props function attribute
    return(
        <>
            {isGoal? <MadeGoal />: <MissedGoal/> }
        </>
    );
}
  