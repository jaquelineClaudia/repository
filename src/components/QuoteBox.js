import React, { useState } from "react";
import quotes from "../quotes.json";
import Button from "./Button"

const getRandom = () => Math.floor(Math.random() * (quotes.length))

const colors = ["#FF33F3","#EA09B0","#EE6A09","#EEF109","#0BFFF4","#2909F0"];

const QuoteBox = () => {
  const [quote, setQuote] = useState(quotes[getRandom()]);

console.log(quote)

  const changeQuote = () => {
    const random = getRandom();
    setQuote(quotes[random]);
  };
  
const color = colors[Math.floor(Math.random() * (colors.length))]

  document.body.style = `background: ${color}`;


  return (
    <div className="card" style={{ color: color }}>
      <i className="fa-solid fa-quote-left"></i>
      <h3>{quote?.quote}</h3>
      <p>{quote?.author}</p>
      
      <Button changeQuote={changeQuote} color={color} />  
     { /*el de la izq es el nombre, el der funcion*/}
    </div>
  );
};

export default QuoteBox;
