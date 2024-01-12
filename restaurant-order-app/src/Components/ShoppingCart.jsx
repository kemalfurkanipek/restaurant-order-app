// src/components/ShoppingCart.js

import React from 'react';
import { useMyContext } from '../Context/MyContext';

const ShoppingCart = () => {
  const { state, setState, cartItemCount } = useMyContext();

  return (
    <div>
      <div
        className={`fixed bottom-10 right-10 cursor-pointer bg-green-500 p-2 border border-green-600 rounded-full text-white`}
        onClick={() => setState(!state)}
      >
        {state ? 'Close Cart' : 'Open Cart'}
        <span className="ml-1 font-bold">{cartItemCount}</span>
      </div>

      <div
        className={`fixed bottom-0 right-0 h-full  p-4 bg-white border-1 border-gray-300 z-10 transition-transform w-34 ${state ? 'hidden' :''}` }
      >
        <p onClick={() => setState('false')}>Cart Content Goes Here</p>
        
      </div>
    </div>
  );
};

export default ShoppingCart;
