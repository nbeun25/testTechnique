import React from "react";

const Btn = ({ text, fnCallback }) => {
  return (
    <button className="btn-click" onClick={fnCallback}>
      {text}
    </button>
  );
};

export default Btn;
