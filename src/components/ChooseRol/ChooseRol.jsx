import React from 'react'
import styles from './ChooseRol.module.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'

export const ChooseRol = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerLeft}>
                <div className={styles.containerLeftText}>
                    <h3>Sé el presidente de una comunidad</h3>
                    <p>
                        Crea y gestiona tu propia comunidad de vecinos, crea
                        códigos invitacionales para agregar a tus vecinos
                    </p>
                    <Link to="/create-community">
                        {' '}
                        <Button>Crear una comunidad</Button>
                    </Link>
                </div>
            </div>

            <div className={styles.containerMid}>
                <div className={styles.containerMidText}>
                    <h1>¡Elige tu rol!</h1>
                </div>
            </div>

            <div className={styles.containerRight}>
                <div className={styles.containerLeftText}>
                    <h2>¿Tienes código de invitación?</h2>
                    <h2>Únete una comunidad</h2>
                    <p>
                        Únete a tu comunidad de vecinos y entérate de los pagos,
                        las notificaciones e incidencias al momento
                    </p>
                    <Link to="/enter-invitation">
                        <Button>Unirse una comunidad</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
