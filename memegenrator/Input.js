import React, { useEffect } from "react";
import troll from "./troll.png"
import Data from "./Data.js"





       



         

export default function Input(){


  


    const [info , setinfo] = React.useState({
        top:"",
        bottom:"",
        url:Data[70].url,

    })
    

    const[allmeme , setallmeme] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setallmeme(data.data.memes))
    },[]);

   function change(event){
           setinfo((prev)=>{
            return{
                ...prev,
                [event.target.name] : event.target.value
            }
           })
   }
 
 
    function Generate(){
        const memearray = allmeme;
        const randomIndex = Math.floor(Math.random() * memearray.length);
        setinfo(prev=>{
            return {
                ...prev,
                url:memearray[randomIndex].url
            }
        })
    }

    return (
 <div id="inputbox">
        <div id="input">

        <div id="top">
            <p>Top Text</p>
            <input placeholder="Top Text" onChange={change} name="top" value={info.top}></input>
        </div>

        <div id="bottom">
            <p>Bottom Text</p>
            <input placeholder="Bottom Text" onChange={change} name="bottom" value={info.bottom}></input>
        </div>

      

        </div>   
            <div id="button">
             <button type="button"  onClick={Generate}>  <p>Get a new meme image </p> </button>
             </div>

             <div id="memeimage">
               <img src={info.url} alt="meme"></img>
               <h2 id="memeheading" class="top">{info.top}</h2>
               <h2 id="memeheading" class="bottom">{info.bottom}</h2>
             
             </div>
          


        
        </div>

    )
}