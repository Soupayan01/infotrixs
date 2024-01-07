import React, { useState } from 'react'
import './RandomQuote.css'
import restart_img from'../assets/restart.png'
import data from'./TemplateData.json'
const RandomQuote = () => {
   
    let quotes=[];
    async function loadQuotes(){
        const response=await fetch("https://type.fit/api/quotes");
        quotes=await response.json();
    }
    const [quote,setQuote]=useState({
        text:"Pain is step of getting happiness",
        author:"John lock",
    });
    const [searchTerm,setSearchTerm]=useState("");
    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
    loadQuotes();
  return (
    <div> 
        <div className='header'><h1>Quote of the Day</h1></div>
         <div className='container'>
    <div className='quote'>"{quote.text}"</div>
    <div>
    <div className='line'></div>
    <div className='bottom'>
        <div className="author">-{quote.author.split(',')[0]}</div>
        <div className="icons" >
            <img src={restart_img}onClick={()=>{random()}} alt="" />
        </div>
    </div>
    </div>
</div>
<div className="heading"><h1> Author Section</h1></div>
<div className="templateContainer">
    <div className="searchInput_Container">
        <input type="text" id="searchInput"placeholder='Search For Author'onChange={(event)=>{
            setSearchTerm(event.target.value);
        }}/>
    </div>
    <div className="template_Container">
        {
            data.filter((val)=>{
                if(searchTerm=="")
                {
                    return val;
                }
                else if(val.author.toLowerCase().includes(searchTerm.toLowerCase()))
                {
                    return val;
                }
            })
            .map((val)=>{
                return(
                    <div className="template">
                        <h3>"{val.text}"</h3>
                        <div className='line'></div>
                        <h2>-{val.author}</h2>
                    </div>
                )
            })
        }
    </div>
</div>
<div className='footer'><h2>lola</h2></div>
</div>
  
  )
}

export default RandomQuote
