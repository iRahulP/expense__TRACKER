import React from 'react';
import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date().toString().substring(0, 15);
    const expenseItem = 'Car Insuarance';
    const expenseAmount = 295.95;

    return (
        <div className="expense-item">
            <div>{expenseDate}</div>
            <div className="expense-item__description">
                <h2>{expenseItem}</h2>
                <div className="expense-item__price">
                    {expenseAmount}
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
