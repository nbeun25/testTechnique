import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiBackEnd from "../api/api.Backend";

export default function UniqueExcuse() {
  const { http_code } = useParams();
  const [excuse, setExcuse] = useState({});

  useEffect(() => {
    if (http_code) {
      apiBackEnd
        .get(`/api/excuse/${http_code}`)
        .then((response) => {
          setExcuse(response.data.excuse[0]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [http_code]);

  if (!excuse) {
    return (
      <div className="container">
        <h2>⚠️ Le code http n°{http_code} n'existe pas !</h2>
        <img
          className="gif-img"
          src="../img/sorry.gif"
          alt="Gif - Angès est désolée pour vous"
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <h2>Voici l'excuse demandé</h2>
        <p>http_code : {excuse.http_code}</p>
        <p>tag : {excuse.tag}</p>
        <p>message : {excuse.message}</p>
      </div>
    );
  }
}
