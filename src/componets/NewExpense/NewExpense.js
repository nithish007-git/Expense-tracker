import React from 'react';
import NewForm from "./NewForm.js";
import './NewExpense.css';
import ExpensesFilter from '../ExpenseFilter.js';

const NewExpense = (props) => {
  const expense=(money)=>{
    console.log(money)
    props.Onexpense_amount(money);
  }
  const filter=(year)=>{
    console.log(year);
    props.Onfilter(year);


  }
  return (
    <div className='new-expense'>
        <NewForm OnExpenseAmount={expense}/>
        <ExpensesFilter OnFilter={filter}/>

    </div>
  )
}

export default NewExpense