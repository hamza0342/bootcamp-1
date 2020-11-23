import React, { useContext } from 'react';
import ValueContext from './ValueContext';
import NumberReducer from './NumberReducer';
const Child2 = (props) => {
    let [state, dispatch] = React.useReducer(NumberReducer, 52);

    return (
        <div>
            Child 2 {state}
            <br></br>
            <button onClick={ () => {
                dispatch({type:'INCREMENT'});
            }}>Increment</button>
            <br></br>
            <button onClick={()=>{
                dispatch({type:'DECREMENT'});
            }}>Decrement</button>
            
        </div>


    );

}

export default Child2;