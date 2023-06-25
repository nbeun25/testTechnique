import React from "react";

const Btn = ({ text, fnOnClick }) => {
  return (
    <div className="btnGenRandom">
      <button className="btn-click" onClick={fnOnClick}>
        {text}
      </button>
    </div>
  );
};

export default Btn;
