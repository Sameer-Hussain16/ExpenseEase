import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);


  return (
    <>
    <h3 className='add'>History</h3>
    <svg className='addnew' xmlns="http://www.w3.org/2000/svg" width="auto" height="3" viewBox="0 0 439 3" fill="none">
  <path d="M4.30672e-05 1.55313L438.542 1.43547" stroke="#2E2E2E"/>
</svg>
    <ul id="list" className='list'>
        {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction}/>
        ))}


    </ul>
    </>
  )
}
