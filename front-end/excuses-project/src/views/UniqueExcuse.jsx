import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiBackEnd from "../api/api.Backend";

export default function UniqueExcuse() {
  // useParams permet la récupération d'information avec l'url associé
  const { http_code } = useParams();
  const [excuse, setExcuse] = useState({});

  // Appel à l'API ce qui permet de retourner une seule excuse
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

  // J'interviens avec une condition, si je n'ai pas trouvé d'excuse alors j'affiche un message indiquant à la partie client que je n'ai pas trouvé de numéro d'excuse associé à une excuse, sinon j'affiche toutes les informations de l'excuse
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
