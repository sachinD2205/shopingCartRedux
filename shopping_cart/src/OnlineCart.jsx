import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addItem, clearAllItems, removeItem } from "./components/cartSlice";

const OnlineCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state?.cart)?.item;
  console.log("ddddddddd", items);
  return (
    <>
      {items?.map((d) => (
        <h1 key={d + 1}>{d}</h1>
      ))}
      <button onClick={() => dispatch(addItem("sachin"))}>add Item</button>
      <button onClick={() => dispatch(removeItem("ganesh"))}>
        remove Item
      </button>
      <button onClick={() => dispatch(clearAllItems())}> clear </button>
    </>
  );
};

export default OnlineCart;
