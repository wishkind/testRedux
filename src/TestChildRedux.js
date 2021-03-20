import {useSelector, useDispatch} from 'react-redux';

const ChildRedux = () => {
  const num = useSelector(state => state.num);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Using useSelector, useDispatch</h3>
      Number: {num}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};


export default ChildRedux;
