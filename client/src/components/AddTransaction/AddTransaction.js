import React, { useState, useContext, useRef } from 'react'
import { GlobalContext } from '../../context/GlobalState';

import './AddTransaction.css';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('');

    const isIncome = useRef();
    const isExpense = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        if (text && amount && method) {

            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                method,
                text,
                amount: +amount
            }

            addTransaction(newTransaction)

            setText('');
            setAmount('');
        }
    }

    const chooseMethod = (e, isIncome, isExpense) => {
        if (e.target === isIncome.current) {
            setMethod('income');
            isIncome.current.className += ' clicked';
            isExpense.current.className = 'method-btn'
        } else {
            setMethod('expense');
            isExpense.current.className += ' clicked';
            isIncome.current.className = 'method-btn'
        }
    }

    return (
        <>
            <h1>Add New Transaction</h1>

            <h3 style={{ display: 'block', fontWeight: 'lighter' }}>Choose</h3>
            <button className='method-btn' ref={isIncome} onClick={(e) => chooseMethod(e, isIncome, isExpense)}>Income</button> OR
            <button className='method-btn' ref={isExpense} onClick={(e) => chooseMethod(e, isIncome, isExpense)}>Expense</button>

            <form onSubmit={onSubmit}>



                <div className="form-control">
                    <label htmlFor="text">What Is It For</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter name..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>


                <button className="btn">Add Now</button>

            </form>
        </>
    )
}
