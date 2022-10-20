import React, { Component, useState } from 'react';

//For states basic is: States Object, States Function, UI function call

export default function UseStates(){
    //useState: It Re-renders the element when changes are made to setData.
    
    //OBJECT
    {/*Variable Element with STATE FUNCTION which contains logic for given variable      i.e [data, setData] */}
    const [counter, setCounter] = useState(0);  //default value for "counter" passed in useState

    //FUNCTION
    const increment = () => {
        {/*setDATA of counter i.e setCounter = which update the couter*/}
        setCounter(counter + 1);
    }

    return(
        <>
        <div>
            {/*UI CALL*/}
            <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
        </div>

        
        </>
    );
}