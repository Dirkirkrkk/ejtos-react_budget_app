import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert("Budget cannot exceed " + currency + "20000.");
            return;
        }
        if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget below the spending " + totalExpenses + currency);
            return;
        }

        setNewBudget(event.target.value);

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget,
        });
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency} </span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} style={{width: 100}}></input>
        </div>
    );
};
export default Budget;
