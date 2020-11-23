import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Create the initial state

const initialState = {
    transactions: [
        {id: 1, description: "Income 1", transactionAmount: 1000},
        {id: 2, description: "Income 2", transactionAmount: -100},
        {id: 3, description: "Income 3", transactionAmount: 2000}, 
        {id: 4, description: "Income 4", transactionAmount: -500}
    ]
};

//Create the Global Context
export const GlobalContext = createContext(initialState);

//Create a Provider for Global Context

export const GlobalProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider value={
           { transactions: StaticRange.transactions }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

