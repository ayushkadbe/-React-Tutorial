//Having a STRONG FOUNDATION BASE like BAMBOO and AGILITY like its STEM is much more important than knowing thousand things if you don't have expertise in 1 BASIC FOUNDATION for everything.
import './App.css';

import React from "react";
import Contact from './pages/Contact';
import { Link } from 'react-router-dom';
import Header from './pages/Header';
import Conditionals from './pages/Conditionals';




let name="AYUSH";

function App(){
    return(
        <>
        {/*HEADER*/}
        <Header />
        
        {/* LINKS */}
        <Link to="/home">Home</Link> {' | '}
        <Link to="/contact">Contact</Link> {' | '}
        <Link to="/Header">Header</Link> {' | '}
        <Link to="/Conditionals">Conditionals</Link> {' | '}
        <Link to="/Lists">Lists</Link> {' | '}
        <Link to="/UseStates">UseStates</Link> {' | '}
        <Link to="/UseReducer">UseReducer</Link> {' | '}
        <Link to="/UseEffect">UseEffect</Link> {' | '}

        <div className="App">
            <h1>This is a REACT JS APP written in JS & JSX</h1>
        </div>

        <div className='MyClass'>
            <h1 > Hello Everyone. I am {name}</h1>
        </div>     

        {/*JSX EXPRESSIONS*/}
        <p >REACT is {5+5} times better than JavaScript.</p>  
    
        {/*NAVIGATION */}
        <nav>
            <li>Home</li>
            <li>Users</li>
            <li>Payments</li>
        </nav>

        {/* CONTAINER */}
        <div className="container">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam blanditiis nulla ratione placeat facilis itaque in. Voluptate soluta veniam, iste pariatur, consequuntur, quam harum suscipit ducimus nihil dolorum tenetur ea!</p>
        </div>

        {/* TABLE */}
            <table>
                <tr>
                    <th>Company</th>
                    <th>Sector</th>
                    <th>Started</th>
                </tr>
                <tr>
                    <th>SuperMart</th>
                    <th>Hyperlocal</th>
                    <th>2020</th>
                </tr>
                <tr>
                    <th>Web3</th>
                    <th>Web3 Finance</th>
                    <th>2022</th>
                </tr>
            </table>        


            {/*ROUTES*/}
           

            {/*Components Imported use*/}
            <Contact />

            {/*Components inside same file*/}
            <Car />

            {/*Components called inside a Component*/}
            <Garage />

            

            {/*const myElement =*/} <Company name="Universal" />; {/*PROP FUNCTTION: COMPANY WITH PROP/ARGUMENT IS CALLED DIRECTLY*/}
        
             

             <Conditionals />
        </>
    );

}
export default App;

function Car() {
    return <h2>Another Component Function: CAR</h2>;
  }

function Bike(props){
    return <h2>Name of my Bike is {props.brand} </h2>
}

function Cycle(props){
    return <h2>This cycle is {props.brand}</h2>
}

function Truck(props){
    return <h2>This truck is {props.brand.name} {props.brand.model}!</h2>
}

function Garage() {
    //cycle variable
    const cycleInfo = "Tata";

    //truck object
    const truckInfo = {name: 'Tata', model: 'EVtos'};

    return (
      <>
        <h1>Who lives in my Garage Component Function?</h1>
        <Car /> {/*Components called inside a Component*/}

        <h2>Passing Data from GARAGE COMPONENT to BIKE COMPONENT as PROPS by calling BIKE() WITH ARGUMENT</h2>
        {/*Props pass as Argument as VARIABLE in BIKE() FUNCTION from GARAGE() FUNCTION*/}

        {/*PROPS passed as STRING*/}
        <Bike brand="HARLEY"></Bike>

        {/*PROPS passed as Variable*/}
        <Cycle brand={ cycleInfo } />

        {/*PROPS passed as OBJECT*/}
        <Truck brand= { truckInfo} />
      </>
    );
}

function Company(props){
    return <h2>The name of my company is {props.name}.</h2>
}
