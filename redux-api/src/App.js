import React, { useReducer } from 'react';
import ValueContext from './ValueContext';
import Parent from './Parent';
import NumberReducer from './NumberReducer';
import './App.css';

function App() {

 // let [number, setnumber]= React.useState(10);
 let value= React.useState(45);
 let number = useReducer(NumberReducer);

  return (
    <ValueContext.Provider value={value}>
    <div>
      Hello World
      <Parent></Parent>

      

      
     <button onClick= {
        () => {
          value[1](value[0]+=10)
        }
      }>
        Click me
    </button>
    </div>
    </ValueContext.Provider>
  );
}

export default App;
