import logo from './logo.svg';
import './App.css';
import ExpenseItem from './componets/ExpenseItem';
import { Card } from './componets/card';
import NewExpense from './componets/NewExpense/NewExpense';
import ExpensesFilter from './componets/ExpenseFilter';
import { useState } from 'react';
const expense_dummy =[
  {title:'car' ,amount:300,date:new Date(2022,5,21)},
  {title:'Finace' ,amount:300,date:new Date(2022,3,12)},
  {title:'tutor' ,amount:300,date:new Date(2022,3,1)}
]

function App() {    

  const [expense,setexpense] =useState(expense_dummy);
  const expense_amount=(expense)=>{
    setexpense((prevExpense)=>{
      return [expense,...prevExpense];
    });
    console.log(expense);

  };
  const expense_filter=(money)=>{
    console.log(money);

  }
  return (  
    <div className="App">
     <h2 className='Tracker'>ExpenseTracker</h2>
      <ExpenseItem  cause ={expense[0].title} expenseTitle={expense[0].amount  }date={expense[1].date}></ExpenseItem>
      <ExpenseItem  cause ={expense[1].title} expenseTitle={expense[1].amount} date={expense[1].date}></ExpenseItem>
      <ExpenseItem  cause ={expense[2].title} expenseTitle={expense[2].amount  }date={expense[1].date}></ExpenseItem>
      <NewExpense Onexpense_amount={expense_amount} Onfilter={expense_filter}/>
  
    </div>
    // <div>
    //     <h2>hello</h2>
    //   <button> Hello</button>
    //   <button>helo</button>


    // </div>
  );
}

export default App;
