import React, { useContext } from 'react';
import ValueContext from './ValueContext';

const Child = (props) => {
let value= useContext(ValueContext);
    return (
        <div>
            Child number {value[0]}
            
        </div>


    );

}

export default Child;