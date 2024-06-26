import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'SET_CURRENCY',
            payload: event.target.value,
        });
    }
    return (
        <div className='alert alert-secondary' style={{backgroundColor: '#88ff99'}}>
            <span>Currency: </span>
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => handleCurrencyChange(event)} style={{backgroundColor: '#88ff99   '}}>
                <option value="£" name="pound">£ Pound</option>
                <option value="$" name="pound">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
