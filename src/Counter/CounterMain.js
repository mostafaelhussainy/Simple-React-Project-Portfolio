import Counter from './Counter';
import { useState } from 'react';
import './style.css';

const CounterMain = () => {

  const [count, setCount] = useState(0);
  const onValueChange = event => setCount(event.target.value);
  
  return ( 
    <div className="container">
        <label>
          enter your starting number: 
        </label>
        <input 
        type="number"
        required
        value={count}
        onChange={onValueChange}
        />
        <div className="counter"> Count: { count } </div>
        <Counter count = {count} setCount = {setCount}/>
        <p 
          className='msg'
          style = {
            !count
              ? {display: 'block'}
              : {display: 'none'}
          }
        >
          You can't decrement below zero!!!!
          </p>
      </div>
   );
}
 
export default CounterMain;