import { ChangeEvent, useEffect, useState } from 'react';
import { Counter } from '@/components/Counter/Counter.tsx';

export const Home = () => {
  const [data, setData] = useState<object | null>(null);
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState('');

  const handleClick = () => setToggle(prevState => !prevState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  useEffect(() => {
    setTimeout(() => {
      setData({});
    }, 100);
  }, []);

  return (
    <div data-testid="home-page">
      <h1 data-testid="value-element">{value}</h1>
      {toggle && <div data-testid="toggle-element">toggle</div>}
      {data && <div>data</div>}
      <h1>Hello World</h1>
      <button data-testid="toggle-button" onClick={handleClick}>
        click me
      </button>
      <input type="text" placeholder="input value..." value={value} onChange={handleChange} />
      <Counter />
    </div>
  );
};
