import React from "react";
import troll from "./troll.png"

export default function Navbar(){
    return (
       <div id="navbar">
          
           <div id="meme">
                    <img id="troll" src={troll} alt="t"></img>
                    <p>Meme Generator</p>
           </div>

                <div id="title">
                    <p>React Course - Project 3</p>
                </div>
           

        </div> 
    )
}