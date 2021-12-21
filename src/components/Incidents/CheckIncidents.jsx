import { React, useState, useEffect } from 'react'
import styles from './CheckIncidents.module.css'
import { IncidentService } from '../../services/incident.service'

export const CheckIncidents = () => {
    const [incident, setIncident] = useState([])

    useEffect(() => {
        const onMount = async () => {
            const data = await IncidentService.getIncidentData('')
            console.log({ data })
            setIncident(data.data)
        }
        onMount()
    }, [])

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
                <h1>Incidencias</h1>
                <div className={styles.blockLeftContainer}>
                    <div className={styles.blockLeftTop}>
                        <div>{displayIncidentData()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
