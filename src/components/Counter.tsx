import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const resetCount = () => setCount(0);
  return (
    <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <button
        className=" text-white p-4 mr-2 bg-blue-400 rounded"
        onClick={increment}
      >
        +
      </button>
      <button
        className=" text-white p-4 mr-2 bg-blue-400 rounded"
        onClick={resetCount}
      >
        {count}
      </button>
      <button
        className=" text-white p-4 bg-blue-400 rounded"
        onClick={decrement}
      >
        -
      </button>
    </div>
  );
};
export default Counter;
