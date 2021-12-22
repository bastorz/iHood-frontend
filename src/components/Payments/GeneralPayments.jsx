import React, { useState, useEffect } from 'react'
import styles from './GeneralPayments.module.css'
import { Icon } from '@iconify/react'

export const GeneralPayment = () => {
    return (
        <div className={styles.container}>
            <div className={styles.containerPayment}>
                <div className={styles.containerPaymentSmall}>
                    <h3>22 de octubre del 2021 </h3>
                    <h3>Cuota a pagar: 52€ </h3>
                    <h3>Estado: Pago</h3>
                </div>
                <div className={styles.containerPaymentSmall}>
                    <h3>23 de noviembre del 2021 </h3>
                    <h3>Cuota a pagar: 52€ </h3>
                    <h3>Estado: Pago</h3>
                </div>
                <div className={styles.containerPaymentSmall}>
                    <h3>22 de diciembre del 2021 </h3>
                    <h3>Cuota a pagar: 52€ </h3>
                    <h3>Estado: Sin pagar</h3>
                </div>
            </div>
        </div>
    )
}
