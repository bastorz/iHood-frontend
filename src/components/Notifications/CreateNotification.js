import { useState } from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Icon } from '@iconify/react';
import './css/Notification.css';

const CreateNotification = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
}
return (
  <div className="container">
  <div className="block-left">
  <div className="block-left-top">
  <div className="Contenedores"> <Icon className="bell" icon="bi:bell-fill" color="#7879f1" /></div></div>
  <div className="block-left-bottom">
  <Icon className="casa" icon="noto:house-with-garden" color="#7879f1"/>
  </div>
  </div>
    
  <div className="block-right">
  <div className="MainContainer">
    <h2>Escribe tu Notificación   <Icon icon="bi:bell-fill" color="#7879f1"/> </h2>
    <form onSubmit={handleSubmit}>
      <div className= "titleNot"> <input
        type="text"
        placeholder="Escribe el título..."
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)} />
        </div>
      <div className="descNot"> <TextareaAutosize
        placeholder="Descripción de la notificación ..." 
        className="notification"
        type="text"
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></TextareaAutosize></div>
      </form>
      <div className="botonNot"><button>Enviar</button></div>
      </div></div>
       </div>
       
    
  );
}

export default CreateNotification