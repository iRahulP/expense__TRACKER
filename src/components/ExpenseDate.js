import React from 'react'

function ExpenseDate(props) {
    const month = props.edate.toLocaleString('en-US',{ month: 'long' });
    const day = props.edate.toLocaleString('en-US',{ day : '2-digit' })
    const year = props.edate.getFullYear();

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>            
        </div>
    )
}

export default ExpenseDate;
