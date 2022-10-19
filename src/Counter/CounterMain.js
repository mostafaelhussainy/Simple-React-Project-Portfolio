import './style.css';
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement} from '../redux/count'

const CounterMain = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          disabled={!count}
        >
          -
        </button>
        <p 
          className='msg'
          style = {
            !count
              ? {display: 'block'}
              : {display: 'none'}
          }
        >
          You can't decrement below zero!!!!
          <br/>the button will be disabled
        </p>
      </div>
    </div>
   );
}
  
export default CounterMain;