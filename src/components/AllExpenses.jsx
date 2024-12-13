import { useContext, useEffect, useState } from "react";
import expenseDataContext from "../contexts/expenseData";
import Expense from "./Expense";
const AllExpenses = () => {
  const [allEntries,setAllEntries] = useState([])
  const { data } = useContext(expenseDataContext);
  const [searchBy, setSearchBy] = useState({})
  
  useEffect(()=>{
    setAllEntries(data)
  },[data])
  
  const handleSearchInput = (type,value) => {
    setSearchBy({
        type,value
    })
  }
  
  const handleSearch = (e) => {
    e.preventDefault();
    if(searchBy.type === "title"){
        const result = data.filter((obj)=>{
            if(obj.title.includes(searchBy.value)){
                return obj
            }
        })
        setAllEntries(result);
    }else if(searchBy.type === "amount"){
        const result = data.filter((obj)=>parseInt(obj.amount)<=parseInt(searchBy.value))
        setAllEntries(result);
    }else if (searchBy.type === "date") {
        const result = data.filter((obj)=>obj.date === searchBy.value)
        setAllEntries(result);
    }
  }
  
  const handleClearFilters = () => {
    setSearchBy({});
    setAllEntries(data)
  }

  return (
    <div className="all-expense-wrapper">
      <div className="filters">
        <form onSubmit={handleSearch}>
          <label htmlFor="title-id">
            Title
            <input
              id="title-id"
              onInput={(e) => handleSearchInput("title", e.target.value)}
              type="text"
              placeholder="Search By Title"
            />
          </label>
          <label htmlFor="amount-id">
            Amount
            <input
              id="amount-id"
              onChange={(e) => handleSearchInput("amount", e.target.value)}
              type="number"
              placeholder="Search By amount"
            />
          </label>
          <label htmlFor="date-id">
            Date
            <input
              id="date-id"
              onChange={(e) => handleSearchInput("date", e.target.value)}
              type="date"
            />
          </label>
          <button>Search</button>
          <button onClick={handleClearFilters}>Clear</button>
        </form>
      </div>
      <p>Previous Expenses: </p>
      {allEntries.length?allEntries.map((item) => {
        return <Expense data={item} key={item.id} />;
      }):<p>No Entries found!!</p>
      }
    </div>
  );
};

export default AllExpenses;
