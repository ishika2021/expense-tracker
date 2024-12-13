import { createContext,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const expenseDataContext = createContext();

export const ExpenseDataContextProvider = (props) => {
    const [data, setData] = useState([]);
    
    const handleData = (obj) => {
        const entry = {
            id: uuidv4(),
            ...obj
        }
        const allEntries = [...data];
        allEntries.push(entry);
        setData(allEntries)
    }
    
    const deleteEntry = (id) => {
        if(id){
            const updatedArr = data.filter((obj)=>obj.id!==id);
            setData(updatedArr);
        }
    }
    
    return (
       <expenseDataContext.Provider value={{data:data,handleData:handleData,deleteEntry:deleteEntry}}>
       {props.children}
       </expenseDataContext.Provider>
    )
    
}

export default expenseDataContext;

