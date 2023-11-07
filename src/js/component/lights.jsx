import React, { useState } from "react";
import './lights.css'

const Lights =() =>{
    const [red, setRed] = useState('red')
    const [ambar, setAmbar] = useState('ambar')
    const [verde, setVerde] = useState('verde')

    
    const [displayPurple, setDisplayPurple] = useState("none")

    
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
const addPurple = () => {
    setDisplayPurple("block");
    setRed("purple");
}
    
    return (
        <>
        <div className="traffic_background">
            <button 
                className={red} 
                onClick={()=>changeColourRed()}>
            </button>
			<button 
                className={ambar} 
                onClick={()=>changeColourAmbar()}>
            </button>
			<button 
                className={verde} 
                onClick={()=>changeColourVerde()}>
            </button>
        </div>
        <div className={"purple " + (red === "purple" ? "glow" : "")} style={{ display: displayPurple }} onClick={addPurple}></div>
				
        <div>
            <button className="btn btn-primary m-4" onClick={changeColorRed}>Change</button>
			<button className="btn btn-success m-4" onClick={addPurple}>Añadir Púrpura</button>
        </div>
        </>
    )
}

export default Lights