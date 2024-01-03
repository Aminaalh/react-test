import React, { useState } from 'react';

const Count = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="count-container flex items-center justify-center flex-col text-center">
        <h1 className={`text-4xl font-bold ${number === 0 ? 'text-black' : number > 0 ? 'text-blue-500' : 'text-red-500'}`}>
          {number}
        </h1>
        <div className="flex mt-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={increment}
          >
            +
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;
