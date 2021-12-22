import { React, useState } from 'react'
import { Icon } from '@iconify/react'
import styles from './CreatePayment.module.css'
import { NotificationService } from '../../services/notification.service'

export const CreatePayment = () => {
    const [createNotification, setCreateNotification] = useState({
        title: '',
        description: '',
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setCreateNotification((oldstate) => ({ ...oldstate, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newRecord = { ...createNotification }

        const registrationCode = await NotificationService.postNotificationData(
            newRecord
        )

        console.log(registrationCode)

        setCreateNotification({ title: '', description: '' })
    }

    return (
        <div className={styles.container}>
            <div className={styles.blockRight}>
                <h2 className={styles.titulo}>
                    Escribe tu Notificación{''}
                    <Icon icon="bi:bell-fill" color="#ffffff" />{' '}
                </h2>
                <div className={styles.mainContainer}>
                    <div className={styles.titleNot}>
                        <h3 className={styles.titulo2}>Título</h3>
                        <input
                            className={styles.inputTitle}
                            name="title"
                            type="text"
                            placeholder="titulo ..."
                            onChange={handleInput}
                        ></input>
                        <h3 className={styles.titulo2}>Tipo de pago</h3>
                        <select
                            className={styles.inputTitle}
                            name="Tipo de pagos"
                        >
                            <option value="1">Pago mensual</option>
                            <option value="2">Pagos extra</option>
                            <option value="3">Servicios de la comunidad</option>
                        </select>
                        <h3 className={styles.titulo2}>Descripción</h3>
                        <input
                            name="description"
                            type="text"
                            className={styles.inputDesc}
                            placeholder="Descripción de la notificación ..."
                            onChange={handleInput}
                        ></input>

                        <button
                            className={styles.inputBtn}
                            onClick={handleSubmit}
                        >
                            Enviar
                        </button>
                    </div>
                    <div className={styles.botonNot}></div>
                </div>
            </div>
        </div>
    )
}
