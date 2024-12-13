import React, { useState,useContext } from "react";
import expenseDataContext from "../contexts/expenseData";

const ExpenseEntry = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState('');
  const [error, setError] = useState('');
  const {handleData} = useContext(expenseDataContext);

  const handleInput = (type, e) => {
    switch (type) {
      case "title":
        setTitle(e.target.value);
        break;
      case "amount":
        setAmount(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(title === '' || amount < 0 || date === ''){
        setError('Please Fill all details')
    }else{
        const obj = {title,date,amount};
        handleData(obj);
        setError('');
        setTitle('');
        setAmount(0);
        setDate('');
      
    }
    
  };

  return (
    <div className="expense-entry-wrapper">
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="title-id">
        Title
        <input
          id="title-id"
          onInput={(e) => handleInput("title", e)}
          type="text"
          value={title}
          placeholder="Enter expense name"
        />
      </label>
      <label htmlFor="amount-id">
        Amount
        <input
          id="amount-id"
          onChange={(e) => handleInput("amount", e)}
          type="number"
          value={amount}
          placeholder="Enter the amount"
        />
      </label>
      <label htmlFor="date-id">
        Date
        <input
          id="date-id"
          onChange={(e) => handleInput("date", e)}
          type="date"
          value={date}
        />
      </label>
      <button>Save</button>
    </form>
    {error && (<p>{error}</p>)}
    </div>
  );
};

export default ExpenseEntry;
