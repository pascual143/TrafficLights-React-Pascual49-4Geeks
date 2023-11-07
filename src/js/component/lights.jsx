import React, { useState } from "react";
import './lights.css'

const Lights =() =>{
    const [red, setRed] = useState('red')
    const [ambar, setAmbar] = useState('ambar')
    const [verde, setVerde] = useState('verde')
    

    function changeColourRed (){
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
    function changeColourAmbar (){
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
    function changeColourVerde (){
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

    return (
        <div className="traffic_background">
            <button className={red} onClick={()=>changeColourRed()}></button>
			<button className={ambar} onClick={()=>changeColourAmbar()}></button>
			<button className={verde} onClick={()=>changeColourVerde()}></button>
        </div>
    )
}

export default Lights