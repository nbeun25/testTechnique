import React, { useEffect } from "react";
import { useState } from "react";
import apiBackEnd from "../api/api.Backend";
import Btn from "../components/Btn";

export default function Home() {
  const [excuses, setExcuses] = useState([]);
  const [excuse, setExcuse] = useState();

  useEffect(() => {
    apiBackEnd
      .get(`api/excuses`)
      .then((response) => {
        const datas = response.data.excuses;
        setExcuses(datas);
        setExcuse(datas[getRandom(datas, 1)]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function getRandom(excuses, nbRandom) {
    let newRandom;
    do {
      newRandom = Math.floor(Math.random() * excuses.length);
    } while (newRandom === nbRandom);
    return newRandom;
  }

  function randomOnClick() {
    return setExcuse(excuses[getRandom(excuses, excuse.id - 1)]);
  }

  // Home Page
  return (
    <div className="App">
      <div className="container">
        <h1>Mon application d'excuses</h1>
        <p>{excuse?.message}</p>
        <Btn text="Click me" fnOnClick={randomOnClick} />
      </div>
    </div>
  );
}
