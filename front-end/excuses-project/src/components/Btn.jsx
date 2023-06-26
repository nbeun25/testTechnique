import React from "react";

const Btn = ({ text, fnOnClick }) => {
  // Sous-Composant du bouton
  return (
    <div className="btnGenRandom">
      <button className="btn-click" onClick={fnOnClick}>
        {text}
      </button>
    </div>
  );
};

export default Btn;
