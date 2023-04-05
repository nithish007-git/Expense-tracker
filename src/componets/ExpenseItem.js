import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const year =props.date.getFullYear();
    const Month =props.date.toLocaleString('en-US',{month:'long'});
    const day =props.date.toLocaleString('en-US',{day:'2-digit'});
  return (

    
    <div className='data'>
  
        <h2 className='cause'> {props.cause}</h2>
        <h2 className='title'>{props.expenseTitle}</h2>
        <h2 className='month'>{Month}</h2>
        <h2 className='year'>{year}</h2>
        <h2  className='day'>{day}</h2>

        
        </div>
  )
}

export default ExpenseItem