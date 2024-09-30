import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function DetallePersonaje() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dragonball-api.com/api/characters/${id}`
        );
        setPersonaje(response.data);
      } catch (error) {
        setError("Hay problemas al cargar el personaje: " + error.message);
      } finally {
        setCargando(false);
      }
    };

    fetchData();
  }, [id]);

  if (cargando) return <p>CARGANDO....</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="detalle-personaje">
      <img className="pri" src={personaje.image} alt={personaje.name} />
      <h2>{personaje.name}</h2>
      <p>{personaje.ki ? `Ki: ${personaje.ki}` : "Ki no disponible"}</p>
      <p>{personaje.race ? `Raza: ${personaje.race}` : "Raza no disponible"}</p>
      <p>
        {personaje.gender
          ? `Género: ${personaje.gender}`
          : "Género no disponible"}
      </p>
      <p>
        {personaje.description
          ? `Descripción: ${personaje.description}`
          : "Descripción no disponible"}
      </p>
      <p>
        {personaje.affiliation
          ? `Afiliación: ${personaje.affiliation}`
          : "Afiliación no disponible"}
      </p>
      <p>
        {personaje.deletedAt
          ? `Eliminado: ${personaje.deletedAt}`
          : "No eliminado"}
      </p>
      <p>
        {personaje.originPlanet?.name
          ? `Planeta de origen: ${personaje.originPlanet.name}`
          : "Planeta de origen no disponible"}
      </p>
      <p>
        {personaje.originPlanet?.isDestroyed
          ? "Planeta destruido: Sí"
          : "Planeta destruido: No"}
      </p>
      <p>
        {personaje.originPlanet?.description
          ? `Descripción del planeta: ${personaje.originPlanet.description}`
          : "Descripción del planeta no disponible"}
      </p>
      
      <h3>TRANSFORMACIONES</h3>
      <div className="transformaciones-grid">
            {personaje.transformations.map(transformation=>(
                <div className="transformacion-card" key={transformation.id}>
                    <p>{transformation.name}</p>
                    <img src={transformation.image} alt={transformation.name} />
                    <p>Ki: {transformation.ki}</p>
                </div>
            ))}
      </div>
    </div>
  );
}

export default DetallePersonaje;
