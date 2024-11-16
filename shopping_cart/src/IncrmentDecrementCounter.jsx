import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  clear,
} from "./components/incrementDecrementSlice";
import "./App.css";

const Index = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter)?.value;
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement </button>
      <button onClick={() => dispatch(clear())}> clear </button>
    </>
  );
};

export default Index;
