import React, { createContext, useContext, useReducer} from 'react';


// Prepares the data Layer
export const StateConetxt = createContext();

// Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateConetxt.Provider value = {useReducer(reducer, 
        initialState)}>
            {children}
        </StateConetxt.Provider>
);

//Pull information fromthe data layer
export const useStateValue = () => useContext(StateConetxt);