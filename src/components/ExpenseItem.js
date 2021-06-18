import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>{props.edate.toString().slice(0,15)}</div>
            <div className="expense-item__description">
                <h2>{props.etitle}</h2>
                <div className="expense-item__price">
                    {props.eamount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
