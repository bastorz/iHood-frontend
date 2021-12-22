import React, { useState, useEffect } from 'react'
import styles from './GeneralPayments.module.css'
import { Icon } from '@iconify/react'

export const ExtraPayment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerPayment}>
                <div className={styles.containerPaymentSmall}>
                    <h3>4 de noviembre del 2021 </h3>
                    <h3>Derrama por avería en el ascensor </h3>
                    <h3>Cuota a pagar: 168€ </h3>
                    <h3>Estado: Pago</h3>
                </div>
                <div className={styles.containerPaymentSmall}>
                    <h3>19 de diciembre del 2021 </h3>
                    <h3>Cesta navideña anual</h3>
                    <h3>Cuota a pagar: 15€ </h3>
                    <h3>Estado: Sin pagar</h3>
                </div>
            </div>
        </div>
    )
}
