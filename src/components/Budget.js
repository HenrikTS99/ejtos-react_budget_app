import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        let budgetValue = Number(event.target.value)

        if (budgetValue > 20000) {
            alert("The value cannot exceed 20,000" )
            return;
        }
        if (budgetValue < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.")
            return;
        }
        setNewBudget(budgetValue);

        dispatch({
            type: 'SET_BUDGET',
            payload: budgetValue
        });
        setNewBudget(budgetValue); // Update local state
    };
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;