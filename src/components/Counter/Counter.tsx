import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '@/store/reducers/selectors/getCounterValue/getCounterValue.ts';
import { decrement, increment } from '@/store/reducers/counterSlice.ts';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div data-testid="value-title">
      <h1>{value}</h1>
      <button data-testid="increment-button" onClick={onIncrement}>
        +
      </button>
      <button data-testid="decrement-button" onClick={onDecrement}>
        -
      </button>
    </div>
  );
};
