import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deposit, credit } from './action';
import './index.css';

const BankAccount = () => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance);

  const handleDeposit = (event) => {
    event.preventDefault();
    const amount = Number(event.target.amount.value);
    dispatch(deposit(amount));
  };

  const handleCredit = (event) => {
    event.preventDefault();
    const amount = Number(event.target.amount.value);
    dispatch(credit(amount));
  };

  return (
    <div className="bank-account">
      <h2>Bank Account Balance: {balance}</h2>
      <form onSubmit={handleDeposit}>
        <label htmlFor="deposit-amount">Deposit Amount:</label>
        <input id="deposit-amount" type="number" name="amount" />
        <button type="submit">Deposit</button>
      </form>
      <form onSubmit={handleCredit}>
        <label htmlFor="credit-amount">Credit Amount:</label>
        <input id="credit-amount" type="number" name="amount" />
        <button type="submit">Credit</button>
      </form>
    </div>
  );
};

export default BankAccount;