import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleCurrencyChange = (event) => {
        let CurrencyValue = event.target.value

        
        setNewCurrency(CurrencyValue);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: CurrencyValue
        });
        setNewCurrency(CurrencyValue); // Update local state
    };
    return (
        <div className="px-20">
            <select style={{ width:'100%', textAlign:'center'}} className="custom-select alert alert-success" defaultValue={currency} id="currencySelect" onChange={handleCurrencyChange}>
                <option value="$" name="$">$ Dollar</option>
                <option selected="selected" defaultValue value="£" name="£">£ Pound</option>
                <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;