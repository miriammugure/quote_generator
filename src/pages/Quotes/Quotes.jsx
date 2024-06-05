import React from 'react'
import './Quotes.css'
import { useEffect, useState } from 'react'
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";



function Quotes() {
    const[quotes, setQuotes]=useState("");  

   

    const HandleQuote = async() =>{
        const fetchQuote= await fetch("https://api.adviceslip.com/advice")
        let response= await fetchQuote.json()
       setQuotes(response.slip.advice)
        console.log(response)
    }
   HandleQuote()

useEffect(()=>{
    HandleQuote();
},[])
  return (
    <div>
      <div className="big-quote-container">
        <div className="quote-container">
            <h2><FaQuoteLeft />{quotes}
            <FaQuoteRight /></h2>
            <div className="load" onClick={HandleQuote} >
              <IoReloadCircle />
            </div>
           
  
        </div>
      </div>
    </div>
  )
}

export default Quotes
