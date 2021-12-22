import React, { useEffect, useState } from 'react'
import styles from './css/NotificView.module.css'
import { NotificationService } from '../../services/notification.service'

export const NotificView = () => {
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
        <div>
            <div className={styles.blockLeftContainer}>
                <h1>Notificaciones</h1>
                <div className={styles.blockLeftTop}>
                    <div>{displayNotificationData()}</div>
                </div>
            </div>
        </div>
    )
}
