import { React, useState, useEffect } from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Icon } from '@iconify/react';
import './Notification.css';
import { NotificationService } from "../../services/notification.service";

// function useQuery = (fn) => {
//   const [data, setData] = useState(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const onMount = async () => {
//       const data = await fn()
//       setNotification(data.data)
//       setLoading(false)
//     }
//     onMount()
//   }, [])

//   return { data, loading }
// }

export const CreateNotification = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [notification, setNotification] = useState([])

  useEffect(() => {
    const onMount = async () => {
      const data = await NotificationService.getNotificationData('')
      console.log({ data })
      setNotification(data.data)
    }
    onMount()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const displayNotificationData = () => {
    return notification.map((notification, index) => (
      <div key={index}>
        <h3>{notification.title}</h3>
        <p>{notification.description}</p>
      </div>
    ))
  }

  return (
    <div className="container">
      <div className="block-left">
        <div className="block-left-top">
          <div className="Contenedores">{displayNotificationData()}<Icon className="bell" icon="bi:bell-fill" color="#7879f1" /></div>
        </div>
        <div className="block-left-bottom">
          <Icon className="casa" icon="noto:house-with-garden" color="#7879f1" />
        </div>
      </div>

      <div className="block-right">
        <div className="MainContainer">
          <h2>Escribe tu Notificación   <Icon icon="bi:bell-fill" color="#7879f1" /> </h2>
          <form onSubmit={handleSubmit}>
            <div className="titleNot"> <input
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
        </div>
      </div>
    </div>
  );
}