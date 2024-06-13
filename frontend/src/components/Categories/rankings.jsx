import React, { useState, useEffect } from "react";
import "./rankings.css"; // Importa los estilos CSS aquí
import RocketButton from "./rocketButton";

const Rankings = ({ AI }) => {
  return (
    <>
      <div className="main">
        <div className="part-1">
          <div className="stat-1">
            <div className="stat-1-1">
              <h1 className="">{AI.rating}</h1>
            </div>
            <div className="stat-1-2">
              <svg viewBox="0 0 16 16" height="1em" width="1em">
                <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2zm12 1a1 1 0 011 1v12a1 1 0 01-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 01-1-1V2a1 1 0 011-1h12z" />
              </svg>
            </div>
          </div>
          <h2>Rating</h2>
        </div>

        <div className="part-2">
          <div className="stat-1">
            <div className="stat-1-1">
              <h1 className="">{AI.price}</h1>
            </div>
            <div className="stat-1-2">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 11a3 3 0 00-3 3H7a3 3 0 00-3-3V9a3 3 0 003-3h10a3 3 0 003 3v6z" />
                <path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
              </svg>
            </div>
          </div>
          <h2>Price</h2>
        </div>
      </div>
    </>
  );
};

export default Rankings;
