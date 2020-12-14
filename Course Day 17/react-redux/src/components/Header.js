import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const ui = useSelector((state) => state.ui);
  return <h1>{JSON.stringify(ui, "", 2)}</h1>;
};

export default Header;
