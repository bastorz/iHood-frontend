import React from 'react'
import styles from './ChooseRol.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const ChooseRol = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLeftText}>
                    <h3 className={styles.title}>Sé el presidente de una comunidad</h3>
                    <p className={styles.title}>
                        Crea y gestiona tu propia comunidad de vecinos, crea
                        códigos invitacionales para agregar a tus vecinos
                    </p>
                    <Link to="/create-community">
                        {' '}
                        <Button className={styles.buttonGenerateInvitation}>Crear una comunidad</Button>
                    </Link>
                </div>
            </div>

            <div className={styles.containerMid}>
                <div className={styles.containerMidText}>
                    <h1 className={styles.title}>¡Elige tu rol!</h1>
                </div>
            </div>

            <div className={styles.containerRight}>
                <div className={styles.containerLeftText}>
                    <h2 className={styles.title}>¿Tienes código de invitación?</h2>
                    <h2 className={styles.title}>Únete una comunidad</h2>
                    <p className={styles.title}>
                        Únete a tu comunidad de vecinos y entérate de los pagos,
                        las notificaciones e incidencias al momento
                    </p>
                    <Link to="/enter-invitation">
                        <Button className={styles.buttonGenerateInvitation}>Unirse una comunidad</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
