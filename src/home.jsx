import { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'

const Home = () => {
var colorCode = [];
while (colorCode.length < 2200) {
    do {
        var color = Math.floor((Math.random()*1000000)+1);
    } while (colorCode.indexOf(color) >= 0);
    colorCode.push("#" + ("3211000" + color.toString(16)).slice(-6));
}
// console.log(colorCode);

const colorCopy = (e) => {
   const colorName = e.target.innerText;
   if(navigator.clipboard){
      navigator.clipboard.writeText(colorName);
      navigator.clipboard.readText(colorCode);
      toast.success('Color copy successfully.');
   }

 }

    return (
       <>
      
          
            <div className="colors">
            {colorCode ?
               colorCode.map((c,i) =>{
                  return <div onClick={colorCopy} style={{backgroundColor:`${c}`}}
                   key={i} className="color">
                   <span>{c}</span>
                     </div>
               })
            : "something went wrong"}

            </div>

              <Toaster />


        </>
    )
}

export default Home;

