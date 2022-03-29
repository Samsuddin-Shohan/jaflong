import React, { createContext } from 'react';

export const InputContext = createContext();

const InputProvider = ({children,}) => {
  
    return (
        <InputContext.Provider >
        
        {children}
        
        </InputContext.Provider>
    );
};

export default InputProvider;