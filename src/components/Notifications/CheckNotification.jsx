import { React, useState, useEffect } from 'react'
import styles from './CheckNotification.module.css'
import { NotificationService } from '../../services/notification.service'

export const CheckNotification = () => {
    const [notification, setNotification] = useState([])

    useEffect(() => {
        const onMount = async () => {
            const data = await NotificationService.getNotificationData('')
            console.log({ data })
            setNotification(data.data)
        }
        onMount()
    }, [])

    const displayNotificationData = () => {
        return notification.map((notification, index) => (
            <div className={styles.Contenedores} key={index}>
                <h3>{notification.title}</h3>
                <p>{notification.description}</p>
            </div>
        ))
    }

    return (
        <div className={styles.container}>
            <div className={styles.blockLeft}>
                <h1>Notificaciones</h1>
                <div className={styles.blockLeftContainer}>
                    <div className={styles.blockLeftTop}>
                        <div>{displayNotificationData()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
