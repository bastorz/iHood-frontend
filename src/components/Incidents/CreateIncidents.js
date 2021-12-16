import { useState } from "react";
import { TextareaAutosize } from '@mui/base';
import { Icon } from '@iconify/react';
import './css/Incidents.css';

const CreateIncidents = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
}
  return (
    <div className="contentInc">
    <div className="containerInc"> 
    <div className="incidentStyle">
      <h2>Escribe tu incidencia   <Icon icon="akar-icons:circle-alert-fill" color="#7879f1" /></h2>
      <form onSubmit={handleSubmit}>
        <div className="titleInc" > <input
          type="text"
          placeholder="Escribe el título..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
          </div>
        <div className="descInc"> <TextareaAutosize
          placeholder="Descripción del incidente ..." 
          className="incidents"
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></TextareaAutosize></div>
        <div className="botonInc"><button>Enviar</button></div>
        </form>
        </div>
         </div></div>
        
        
        
        /*<div className="Contenedorchiquito">
        <input

          placeholder="Incidentes"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
     
      </div>*/
        
      
       
      
  );
}

export default CreateIncidents