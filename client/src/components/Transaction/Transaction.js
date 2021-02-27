import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

import './Transaction.css';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.method === 'expense' ? '-' : '+';

    return (
        <li>

            {transaction.text}
            <span className={transaction.method === 'expense' ? 'red' : 'green'}>
                {sign}${numberWithCommas(Math.abs(transaction.amount))}
                <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
            </span>
        </li>
    )
}

