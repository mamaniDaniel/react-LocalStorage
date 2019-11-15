import React from 'react';

const Cita = ({cita, eliminarCita}) => (
  <div className="media m-3 w-25 h-100 ">
    <div className="media-body border border-dark p-3" >
      <h3 className="mt-0">{cita.mascota}</h3>
      <p className="card-text"><span>Dueño: </span>{cita.propietario}</p>
      <p className="card-text"><span>Fecha: </span>{cita.fecha}</p>
      <p className="card-text"><span>Hora: </span>{cita.hora}</p>
      <p className="card-text">{cita.sintomas}</p>

      <button 
        className="btn btn-danger"
        onClick= {() => eliminarCita(cita.id)}
      >Borrar &times;</button>
    </div>
  </div> 
)
 
export default Cita;