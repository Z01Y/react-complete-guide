import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  // useState always return array
  // const [title, setTitle] = useState(props.title);

  // function clickHandler
  // const clickHandler = () => {
  //   // call function so the component function should be re-evaluated
  //   setTitle('updated');
  //   console.log(title);
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
