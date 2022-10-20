import React, { Component, useReducer} from "react";

    //useReducer: Same function of Re-rendering just like useState, but it uses "state" and "action". Many different "state"'s rendered using same "action".

    //reducer FUNCTION contains your custom state logic
    const reducer = (state, action) =>{
        switch (action.type) {
            case "Increment":
                return { count: state.count + 1, showText: state.showText };
            case "toggleShowText":
                return {count: state.count, showText: !state.showText};        
            default:
                return state;
        }

    };
    

export default function UseReducer(){
    //useReducer(<reducer>, <initialState>)
    //useReducer OBJECT with reducer function, {parameters of different actions inside reducer function}
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true});


    
    return(
        <>
        <div className="CenterMe">
            {/*UI CALL*/}
            <h1>{state.count}</h1> {/*Counter*/}

            <button
            onClick={() => {
                dispatch({type: "Increment"});
                dispatch({type: "toggleShowText"});
            }}            
            >
            Click Me
            </button>

            {/*Show Text*/}
            {state.showText && <p>This is Text.</p>}
            </div>
        </>
    );
}