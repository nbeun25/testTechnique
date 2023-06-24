import React from "react";
import Btn from "../components/Btn";

export default function Home() {
  const promptMessage = () => {
    return alert("Hola");
  };
  return (
    <div className="App">
      <div className="container">
        <h1>Mon application d'excuses</h1>
        <p>Mon texte</p>
        <Btn text="Click me" fnCallback={promptMessage} />
      </div>
    </div>
  );
}
