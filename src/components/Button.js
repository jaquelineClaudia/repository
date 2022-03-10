import React from 'react';

const Button = ({changeQuote,color}) => {
      return (
            <div>
                 <button 
                  style={{background:color}}
                  onClick={changeQuote}> >
                  </button> 
            </div>
      );
};

export default Button;