import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    return (
        <div className="expense-item">
            <div>
                <ExpenseDate 
                    edate={props.edate}
                    
                />
            </div>
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
