import React from "react";
import Sliderimg from "./slider";
import FetchApi from "./products";
import Aboutcom from "./about";
import Navigationbar from "./Navigationbar";

export default function Homepage(){
    return(
    <>
    <div style={{backgroundColor:"black"}}>
    <Sliderimg/>
    <Aboutcom/>
    <FetchApi/>
    </div>
    </>
    )
}