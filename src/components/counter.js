import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from '../reducers/counterSlice';

import '../styles/counter.css'

export default function HomeSceen() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  return (
      <div className="card ex_class_counter">
        <p className="ex_class_title">Counter</p>
        <div className="ex_class_row">
          <button
            className="ex_class_button"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className="ex_class_value">{count}</span>
          <button
            className="ex_class_button"
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div className="ex_class_row">
          <input
            className="textbox"
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            className="ex_class_button"
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>
          <button
            className="ex_class_asyncButton ex_class_button"
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
          >
            Add Async
          </button>
        </div>
      </div>
  );
}
