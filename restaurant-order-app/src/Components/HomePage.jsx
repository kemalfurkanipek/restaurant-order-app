import React from 'react';
import { menu } from '../Datas/Products';
import { useMyContext } from '../Context/MyContext';
import ShoppingCart from './ShoppingCart';
const RestaurantPage = () => {
    const { cartItemCount, setCartItemCount } = useMyContext();



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {menu.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-md flex flex-col h-full mt-36">
          <img className="object-cover mb-4 rounded-md" src={`/images/${item.image}`} alt={item.name}/>
          <div className="text-gray-800 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-sm mb-2 flex-grow">{item.description}</p>
            <p className="text-lg font-semibold text-green-600">Price: ${item.price}</p>
            <button onClick={() => setCartItemCount(cartItemCount +1)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-5 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
      <ShoppingCart/>
    </div>
  );
};

export default RestaurantPage;
