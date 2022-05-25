import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { ordered, restocked } from './icecreamSlice';

const IceCreamView = () => {

  const [value, setValue] = useState(1);
  const numOfIceCream = useSelector((state) => state.icecream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Number of Icecream - {numOfIceCream} </h2>
        <button onClick={() => dispatch(ordered())}>Order Icecream</button>
        <input type="number" min={1} value={value} onChange={(e) => setValue(parseInt(e.target.value))}/>
        <button onClick={() => dispatch(restocked(value))}>Restock Icecream</button>
    </div>
  )
};

export default IceCreamView;