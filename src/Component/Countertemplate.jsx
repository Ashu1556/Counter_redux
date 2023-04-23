import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter";

const Countertemplate = () => {
  const count = useSelector((data) => data.counter);
  const dispatch = useDispatch();

  console.log(count);
  return (
    <div style={{ margin: "100px 50px", textAlign: "center" }}>
      <h2>Counter App</h2>
      <span style={{ fontSize: "25px" }}>{count}</span> <br></br>
      <br></br>
      <button
        style={{ marginRight: "10px", marginLeft: "5px", fontSize: "18px" }}
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        style={{ fontSize: "18px" }}
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
    </div>
  );
};

export default Countertemplate;
