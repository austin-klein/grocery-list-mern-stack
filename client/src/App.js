import React from 'react'
import { Header } from './components/Header/Header';
import { Balance } from './components/Balance/Balance';
import { IncomeExpenses } from './components/IncomeExpenses/IncomeExpenses';
import { TransactionList } from './components/TransactionList/TransactionList';
import { AddTransaction } from './components/AddTransaction/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="three">
          <TransactionList />
        </div>
        <div className="one">
          <Balance />
          <IncomeExpenses />
        </div>
        <div className="two">
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
