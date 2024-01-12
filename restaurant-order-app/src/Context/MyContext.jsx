
import { createContext, useState, useContext } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [age, setAge] = useState(18);
  const [state, setState] = useState('false')
  const [cartItemCount, setCartItemCount] = useState(0)
 

  return (
    <MyContext.Provider value={{ age, setAge, state, setState, cartItemCount, setCartItemCount}}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  return useContext(MyContext);
};
