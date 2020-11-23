import React from 'react';

import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import Account from './components/Account';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
     <Header></Header>
     <div className="container">
     <Balance></Balance>
     <Account />
     <TransactionHistory />
     <AddTransaction />
     </div>
     </GlobalProvider>
    </div>
  );
}

export default App;
