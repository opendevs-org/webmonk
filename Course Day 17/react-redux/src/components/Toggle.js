import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import { TOGGLE } from "../redux/UiReducer";

const Toggle = () => {
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  return (
    <div>
      <Header />
      <input
        type="checkbox"
        value={ui.toggle}
        onChange={() => dispatch({ type: TOGGLE })}
      />
    </div>
  );
};

export default Toggle;
