import React, { useState } from "react";
import './lights.css'

const Lights =() =>{
    const [red, setRed] = useState('red')
    const [ambar, setAmbar] = useState('ambar')
    const [verde, setVerde] = useState('verde')
    
//funtion to get the lights when clicks
    function changeColourRed(){
        if(red === "red"){
            setRed('glowRed')
            setAmbar('ambar')
            setVerde('verde')
        } else {
            setRed('red')
            setAmbar('ambar')
            setVerde('verde')
        }
    }
    function changeColourAmbar(){
        if(ambar === "ambar"){
            setAmbar('glowAmbar')
            setRed('red')
            setVerde('verde')
        } else {
            setRed('red')
            setAmbar('ambar')
            setVerde('verde')
        }     
    }
    function changeColourVerde(){
        if(verde === "verde"){
            setVerde('glowGreen')
            setRed('red')
            setAmbar('ambar')
        } else {
            setRed('red')
            setAmbar('ambar')
            setVerde('verde')             
        }
    }

    const changeColorRed = () => {
		if (red === "red") {
			setRed("ambar");
		} else if (red === "ambar") {
			setRed("verde");

		} else if (ambar === "ambar") {
			setAmbar("verde");
        } else if (ambar === "verde") {
			setAmbar("red");

        } else if (verde === "verde") {
			setVerde("red");
        } else if (verde === "red") {
			setVerde("ambar");

	    } else {
            setRed("red");
            setAmbar("ambar");
            setVerde("verde");
        }
    }

//function to get a random light traffic
const [showPurple, setshowPurple] = useState(false);
const onClick = () => setshowPurple(true);

const PurpleLights = () => (
    <div>
        <p className='purple'></p>
    </div>
);
    
    return (
        <>
        <div className="traffic_background">
            <button
                type="button"  
                className={red} 
                onClick={()=>changeColourRed()}>
                {showPurple ? <PurpleLights /> : null}
            </button>
			<button
                type="button"  
                className={ambar} 
                onClick={()=>changeColourAmbar()}>
                {showPurple ? <PurpleLights /> : null}
            </button>
			<button
                type="button"
                className={verde} 
                onClick={()=>changeColourVerde()}>
                {showPurple ? <PurpleLights /> : null}
            </button>
        </div>				
        <div>
            <button 
            className="btn btn-danger m-4 mt-5" 
            onClick={changeColorRed}>
                Change
            </button>
			<button 
                type="button" 
                className="btn btn-success m-4 mt-5" 
                onClick={onClick}>
                    Change to purple lights
            </button>

           
        </div>
        </>
    )
}

export default Lights