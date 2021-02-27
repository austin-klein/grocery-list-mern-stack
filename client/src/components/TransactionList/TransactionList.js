import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { Transaction } from '../Transaction/Transaction'
import { CircleLoader } from '../../utils/CircleLoader';

import './TransactionList.css';

export const TransactionList = () => {
    const { transactions, getTransactions, loading } = useContext(GlobalContext);
    let noTransactions = false;

    useEffect(() => {
        getTransactions();
    }, []);


    transactions.length === 0 && loading === false ? noTransactions = true : noTransactions = false;

    return (
        <>
            <h1>Transaction History</h1>
            { loading && <div className='loader'><CircleLoader /></div>}
            {noTransactions && <h2 style={{ marginTop: '3rem', fontWeight: 'lighter' }}>No Recent Transactions</h2>}
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction._id} />
                ))}
            </ul>

        </>
    )
}
