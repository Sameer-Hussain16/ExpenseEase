import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';


export const AddTransaction = () => {
    const[text, setText] = useState('');
    const[amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
      e.preventDefault();
      setText('');
      setAmount('');

      const newTransaction = {
        id: Math.floor(Math.random() * 1000000000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
    }
  return (
    <>
    <h3 className='add'>Add new transaction</h3>
    <svg  className='addnew' xmlns="http://www.w3.org/2000/svg" width="439" height="3" viewBox="0 0 439 3" fill="none">
  <path d="M4.30672e-05 1.55313L438.542 1.43547" stroke="#2E2E2E"/>
</svg>
    <form onSubmit={onSubmit}>
        <div className='form-control'>
            <label htmlFor="text">Text</label>
            <input className='input-box' type="text" value={text} onChange={(e) => setText(e.target.value)}
             placeholder='Enter text...' required/> <br />
        </div>
        <div className="form-control">
            <label htmlFor="amount"
            >Amount
            </label>
            <input className='input-box' type="number"  value={amount} onChange={(e) => setAmount(e.target.value)} 
            placeholder='Enter amount...' required/>
        </div>
        <button className='btn'>Add transaction</button>
    </form>
    </>
  )
}
