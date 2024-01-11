import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? '-' : '+';
  
  // Determine the class based on the transaction amount being positive or negative
  const transactionClass = transaction.amount < 0 ? 'minus' : 'plus';


  return (
    <li className={transactionClass}>
      <svg className='side' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <circle cx="9.04163" cy="16" r="1" fill="#A5A5A5"/>
  <circle cx="9.04163" cy="12" r="1" fill="#A5A5A5"/>
  <circle cx="9.04163" cy="8" r="1" fill="#A5A5A5"/>
  <circle cx="15.0416" cy="16" r="1" fill="#A5A5A5"/>
  <circle cx="15.0416" cy="12" r="1" fill="#A5A5A5"/>
  <circle cx="15.0416" cy="8" r="1" fill="#A5A5A5"/>
</svg>
      {/* Display transaction text with an added class */}
      <div className='text'>{transaction.text}</div>

      {/* Display transaction amount with an added class */}
      <span className='amount'>₹ {sign}{Math.abs(transaction.amount).toFixed(2)}</span>

      {/* Button to delete the transaction */}
      <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>x</button>
    </li>
  );
}
