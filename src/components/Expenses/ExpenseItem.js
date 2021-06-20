import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate edate={props.edate} />
            <div className="expense-item__description">
                <h2>{props.etitle}</h2>
                <div className="expense-item__price">
                    ${props.eamount}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
