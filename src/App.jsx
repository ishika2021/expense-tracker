import './App.css';
import MainLayout from './pages/MainLayout';
import { ExpenseDataContextProvider } from './contexts/expenseData';

const App =()=> {

  return (
    <div>
      <h1>Check your Expenses</h1>
      <ExpenseDataContextProvider>
      <MainLayout/>
        
      </ExpenseDataContextProvider>
    </div>
  )
}

export default App;
