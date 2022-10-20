import React, { Component }  from 'react';

function Home(){
     {/*SHOOT*/}
     const shoot = () => {
        alert("GREATE SHOT! KEEP IT UP!")
     }

     const success = (a) => {
        alert(a);
     }

    function MissedGoal() {
        return <h1>MISSED!</h1>;
    }
    
    function MadeGoal() {
        return <h1>GOAL!</h1>;
    }

     {/*Component to choice Component*/}
     function Goal(props){
        const isGoal = props.isGoal;

        if(isGoal){
            return <MissedGoal />;
        }else{
            return <MadeGoal />;
        }
     }

     

    return (
        <>
            <button onClick={shoot} style={{alignContent: 'center',}}>TAKE THE SHOT!</button><br></br><br></br>

            <button onClick={() => success("Success Demands Sacrifice, HardWork and Dedication!")}>Yes! YOU CAN DO IT!</button>

            <Goal isGoal={false} />

            

            
       
        </>
    );

}


export default Home;