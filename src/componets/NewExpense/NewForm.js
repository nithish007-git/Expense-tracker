import React, { useState } from 'react';
import './NewForm.css';

const NewForm = ( props) => {
    const [text,settext]=useState();
    const [amount,setamount]=useState();
    const [date,setdate]=useState();
    // const [newValue,setnewvalue]= useState(
    //     {
    //      text:'',
    //      amount:'',
    //      date:''
    //     }
    // )
    // const title=(event)=>{
        
    //     setnewvalue({
    //         ...newValue,
    //         text:event.target.value,
    //     });
    // }
    const title =(event)=>{
        settext(event.target.value);
    }
    const  money =(event)=>{
        setamount(event.target.value);
    }
    const  date1 =(event)=>{
        setdate(event.target.value);
    }
    const Submithandler=(event)=>{
        event.preventDefault();
        const expense ={
            title:text,
            amount:amount,
            date: new Date(date)

        };
        console.log(amount);
        setamount('');
        setdate('');
        settext('');
        props.OnExpenseAmount(amount);

    }
  return (
    <form onSubmit={Submithandler}>
        <div className='new-expense__controls'>
            <div  className='new-expense__control'>
                <label>Title</label>
                <input  type='text' value={text} onChange={title}/> 
            </div>

            <div  className='new-expense__control'>
                <label>amount</label>
                <input  type='number' value={amount}  onChange={money}/> 
               
            </div>

            <div  className='new-expense__control'>
                <label>date</label>
                {/* <input type='date' min="2019-01-01" max="2022-01-01"> </input> */}
                <input type='date' min="2019-01-01" max="2022-01-01"  onChange={date1}  value={date}/> 
            </div>

        </div>
        <div  className='new-expense__actions'>
            <button type="submit">Add</button>
            </div>
    </form>
  )
}

export default NewForm