import React from 'react';


function AddTransaction() {
    const [description, setDescription] = React.useState();
    const [transactionAmount, setTransactionAmount] = React.useState();
  return (
    <div>
     <h3>Add New transaction</h3>
     <form>
         <div className="form-control">
             <label htmlFor='description'>
                 Description
             </label>
             <input type='text'
             id='description' 
             placeholder='Description' 
             value={description}
             onChange={(e) => {setDescription(e.target.value)}}
             
             ></input>
         </div>
         <div className="form-control">
             <label htmlFor="transactionamount">
                 Transaction Amount
             </label>
             <input type="number" id='transactionamount' placeholder="Transaction amount" value= {transactionAmount}
             onChange={(e) => {setTransactionAmount(e.target.value)}}
             ></input>
         </div>
         <button className="btn">
             Add Transaction
         </button>
     </form>
    </div>
  );
}

export default AddTransaction;
