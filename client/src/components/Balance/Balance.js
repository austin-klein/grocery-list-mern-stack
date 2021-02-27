import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

import './Balance.css';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    transactions.forEach(transaction => {
        if (transaction.method === 'expense') {
            transaction.amount = -Math.abs(transaction.amount);
        }
    })

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h1>Your Balance</h1>
            <h1 className={total < 0 ? 'red balance-heading' : 'green balance-heading'}>
                ${numberWithCommas(total)}
            </h1>
        </>
    )
}
