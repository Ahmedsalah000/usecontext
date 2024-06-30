import React, { createContext, useState } from 'react';
//1- create provider  ' which  means   the store '
const Colorcontext = createContext();
//6- update data in context

//2- create provider  'which  the value holder'
const UseContextProvider = ({ children }) => {
  const [data, setdata] = useState('white');

  const changeData = (color) => {
    setdata(color);
  };
  return (
    <Colorcontext.Provider value={{ data, changeData }}>
      {children}
    </Colorcontext.Provider>
  );
};
//3- export context , porvider to wrap  all component  
export { UseContextProvider, Colorcontext };
