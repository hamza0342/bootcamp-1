import React, {useContext} from 'react';
import { GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionHistory() {

const {transactions} = useContext(GlobalContext);

  return (


    <div>
     <h3>
         Transaction History
     </h3>
      <ul className="list">
      
        <Transaction transaction={transactions}/>
       
         
         <li className="minus">
             Project 1 salaries
             <span>-$500</span>
             <button className="delete-btn">X</button>

         </li>
     </ul>
    </div>
  );
}

export default TransactionHistory;
