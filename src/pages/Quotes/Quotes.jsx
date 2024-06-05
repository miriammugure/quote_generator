import React from 'react'
import './Quotes.css'
import { useEffect, useState } from 'react'
import { FaQuoteLeft ,FaQuoteRight } from "react-icons/fa6";
import { IoReloadCircle } from "react-icons/io5";
import { Hourglass } from 'react-loader-spinner'
;<Hourglass
visible={true}
height="80"
width="80"
ariaLabel="hourglass-loading"
wrapperStyle={{}}
wrapperClass=""
colors={['#ffffff', '#720632']}

/>



function Quotes() {
    const[quotes, setQuotes]=useState("");  
    const[loading, setLoading]=useState(false)
   const [error,setError]=useState("")

    const HandleQuote = async() =>{
        try {
            setLoading(true);
            setError(""); 
            const fetchQuote = await fetch("https://api.adviceslip.com/advice");
            let response = await fetchQuote.json();
            setQuotes(response.slip.advice);
            setLoading(false);
        } catch (error) {
            setError("Failed to fetch advice");
            setQuotes(""); 
            setLoading(false);
        }
        
    };
  

useEffect(()=>{
    HandleQuote();
},[])
  return (
    <div>
      <div className="big-quote-container">
        <div className="quote-container">
           
        <div className="text">
                        {loading ? (
                            <Hourglass/>
                        ) : (
                            <>
                                {quotes && <h2><FaQuoteLeft /> {quotes} <FaQuoteRight /></h2>}
                                {error && <h2>{error}</h2>}
                            </>
                        )}
                    </div>
           <div className="load" onClick={HandleQuote} >
                <p>get new quote ➡ </p>
              <IoReloadCircle />
              </div>
        </div>
      
      </div>
    </div>
  )
}

export default Quotes
