import { React, useState, useEffect } from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Icon } from '@iconify/react';
import styles from './Incidents.module.css';
import { IncidentService } from "../../services/incident.service";

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

export const CreateIncidents = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [incident, setIncident] = useState([])

  useEffect(() => {
    const onMount = async () => {
      const data = await IncidentService.getIncidentData('')
      console.log({ data })
      setIncident(data.data)
    }
    onMount()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const displayIncidentData = () => {
    return incident.map((incident, index) => (
      <div className={styles.Contenedores} key={index}>
        <h3>{incident.title}</h3>
        <p>{incident.description}</p>
      </div>
    ))
  }

  return (
    <div className={styles.container}>
      <div className={styles.blockLeft}>
        <div className={styles.blockLeftContainer}>
          <div className={styles.blockLeftTop}>
            <div >{displayIncidentData()}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blockRight}>
        <div className={styles.mainContainer}>
          <h2>Escribe tu Notificación   <Icon icon="bi:bell-fill" color="#7879f1" /> </h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.titleNot}> <input
              type="text"
              placeholder="Escribe el título..."
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className={styles.descNot}> <TextareaAutosize
              placeholder="Descripción de la notificación ..."
              className="notification"
              type="text"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></TextareaAutosize></div>
          </form>
          <div className={styles.botonNot}>
            <button>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}