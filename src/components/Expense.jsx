import "./styles.css";
import { useContext } from "react";
import expenseDataContext from "../contexts/expenseData";


const Expense = ({data}) => {
   const {deleteEntry} = useContext(expenseDataContext)
   const handleExpenseDelete = () => {
    deleteEntry(data.id)
   }
    return(
        <div className="expense-wrapper">
            <p>{data.title}</p>
            <p>{data.amount}</p>
            <p>{data.date}</p>
            
            <button onClick={handleExpenseDelete}>Delete</button>
        </div>
    )
}

export default Expense;