import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';


import './IncomeExpenses.css'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    transactions.forEach(transaction => {
        if (transaction.method === 'expense') {
            transaction.amount = -Math.abs(transaction.amount);
        }
    })
    console.log(transactions);
    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div className="balance-container">
            <div>
                <h2>Income</h2>
                <p className="green">+${numberWithCommas(income)}</p>
            </div>
            <div>
                <h2>Expenses</h2>
                <p className="red">-${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
