import {useDispatch, useSelector}  from 'react-redux';
import { additem, clearItem, removeItem } from '../utils/counterSlice';
import { useState } from 'react';
const Child = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [value, setValue] = useState('');

     const handleInput = (e) => {
        setValue(e.target.value);
     }

     const handleIncrement = () => {
        const num = Number(value);
        if(!NaN){
            dispatch(additem(num));
            setValue('');
        }
     }

     const handleDecrement = () => {
        const num = Number(value);
         if (!NaN) {
           dispatch(removeItem(num));
           setValue('');
         }
     }

    return (
      <>
        <div className="bg-green-100 h-96 w-auto m-24">
          <h1 className="text-blue-600 text-3xl flex justify-center pt-6">
            React Redux Counter App
          </h1>
          <h1 className="text-slate-700 text-3xl flex justify-center pt-3 font-semibold">
            Count: {counter}
          </h1>
          <div className="flex justify-center mt-6">
            <button
              className="px-4 py-2 mr-2 bg-green-500 text-white rounded hover:bg-blue-600"
              onClick={() => dispatch(additem(1))}
            >
              Increment
            </button>
            <button
              className="px-4 py-2 mr-2 bg-red-300 text-white rounded hover:bg-blue-600"
              onClick={() => dispatch(removeItem(1))}
            >
              Decrement
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-blue-600"
              onClick={() => dispatch(clearItem())}
            >
              Reset
            </button>
          </div>

          <div className=" flex justify-center mt-6">
            <input
              type="number"
              className="border-solid border-s-violet-400  border-2 h-10 w-64"
              value={value}
              onChange={handleInput}
            />
            </div>
            <div className="justify-center mt-6 flex">
              <button
                className="px-4 py-2 mr-2 bg-violet-400 text-white rounded hover:bg-blue-600"
                onClick={handleIncrement}
              >
                Increment by Value
              </button>
              <button
                className="px-4 py-2 mr-2 bg-violet-400 text-white rounded hover:bg-blue-600"
                onClick={handleDecrement}
              >
                Decrement by Value
              </button>
          </div>
        </div>
      </>
    );
    
}

export default Child; 