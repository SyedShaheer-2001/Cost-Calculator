// context/TypeContext.js
'use client'
// context/TypeContext.js
import React, { createContext, useContext, useState } from 'react';

// Create the context
const TypeContext = createContext();

// Create a custom hook to use the context
export const useType = () => {
  return useContext(TypeContext);
};

// Create the TypeProvider component
export const TypeProvider = ({ children }) => {
  const [type, setType] = useState(''); // Initial type state

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
};

