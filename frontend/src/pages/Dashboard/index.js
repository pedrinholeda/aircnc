import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import "./style.css";

export default function Dashboard() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    async function loadSpots() {
      const user_id = localStorage.getItem("user");
      const response = await api.get("/dashboard", {
        headers: { user_id }
      });
      setSpots(response.data);
    }
    loadSpots();
  }, []); //[] -> array de dependencias , toda vez que alterar ele execulta novamente, caso esteja vazio execulta somente uma vez
  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          //sempre colocar um valor unico (key) quando fizer uma estrutura de repetição
          //encontra mais facil um elemento
          <li key={spot.id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong>{spot.company}</strong>
            <br />
            <span>{spot.price ? `R$${spot.price}/dia` : "GRATUITO"}</span>
          </li>
        ))}
      </ul>
      <Link to="/new">
        <button className="btn"> Cadastrar novo spot</button>
      </Link>
    </>
  );
}
