import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const[event1,setevent]=useState();
    const valueListner=(event)=>{
        setevent(event.target.value);
        console.log(event1); 
        props.OnFilter(event1);

    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={valueListner}>
          <option value='2022' >2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;