import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{ currency }{props.cost}</td>
        <td><button 
            className="btn btn-success"
            style={{ 
                borderRadius: "50%", 
                width: "25px",  // Adjust width for your desired button size
                height: "25px", // Adjust height for your desired button size
                fontSize: "35px", // Adjust font size for your desired plus sign size
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }} 
            onClick={event=> increaseAllocation(props.name)}>
            <span className='pb-2'>+</span>
        </button></td>

        <td><button
            className="btn btn-danger"
            style={{ 
                borderRadius: "50%", 
                width: "25px",  // Adjust width for your desired button size
                height: "25px", // Adjust height for your desired button size
                fontSize: "55px", // Adjust font size for your desired plus sign size
                
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onClick={event=> decreaseAllocation(props.name)}>
            <span style={{ paddingBottom: "13px" }}>-</span>
            </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
