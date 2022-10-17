const Counter = (props) => {
  const handleIncrement = () => {
    props.setCount(+props.count + 1);
  };

  const handleDecrement = () => {
    props.setCount(props.count - 1);
  };

  return ( 
    <div className="counter-container">
      <button className="increment" onClick={handleIncrement}>+</button>
      <button 
      className="decrement" 
      onClick={handleDecrement}
      disabled={!props.count}
      >-</button>
    </div>
   );
}
 
export default Counter;