import React, { useState, useEffect } from 'react'
import styles from './GeneralPayments.module.css'
import { Icon } from '@iconify/react'

export const CommunityServicePayment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerPayment2}>
                <div className={styles.containerPaymentSmall2}>
                    <h3>30 de octubre del 2021 </h3>
                    <h3>Mensualidad Agua y Luz </h3>
                    <h3>Cuota a pagar: 60€ </h3>
                    <h3>Estado: Pago</h3>
                </div>
                <div className={styles.containerPaymentSmall2}>
                    <h3>30 de noviembre del 2021 </h3>
                    <h3>Mensualidad Agua y Luz </h3>
                    <h3>Cuota a pagar: 60€ </h3>
                    <h3>Estado: Pago</h3>
                </div>
                <div className={styles.containerPaymentSmall2}>
                    <h3>12 de diciembre del 2021 </h3>
                    <h3> Fumigación de las zonas comunes </h3>
                    <h3>Cuota a pagar: 13€ </h3>
                    <h3>Estado: Sin pagar</h3>
                </div>
                <div className={styles.containerPaymentSmall2}>
                    <h3>19 de diciembre del 2021 </h3>
                    <h3>Fontanero para la piscina</h3>
                    <h3>Cuota a pagar: 7€ </h3>
                    <h3>Estado: Sin pagar</h3>
                </div>
            </div>
        </div>
    )
}
