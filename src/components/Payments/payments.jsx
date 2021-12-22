import React, { useState, useEffect } from 'react'
import styles from './payments.module.css'
import { Icon } from '@iconify/react'
import Popup from '../Popup/Popup'
import { PaymentsService } from '../../services/payment.service'
import Login from '../login/login'

export const Payment = () => {
    const goToPaymentPage = () => {
        window.location = '/general-payments'
    }

    const goToCommunityGeneralPaymentPage = () => {
        window.location = '/community-service-payments'
    }

    const goToExtraPaymentPage = () => {
        window.location = '/extra-payments'
    }

    return (
        <div className={styles.container}>
            <div className={styles.paymentsContainer}>
                <div className={styles.paymentsContainerTop}>
                    <p className={styles.paragraph}>Pagos de la comunidad</p>
                    <Icon
                        className={styles.cardIcon}
                        icon="bi:credit-card"
                        color="#7879f1"
                    />
                </div>
                <div className={styles.paymentsContainerBot}>
                    <div>
                        <input
                            type="button"
                            id="Pagos extras"
                            value="Pago mensual"
                            className={styles.paymentsOptions}
                            onClick={goToPaymentPage}
                        ></input>
                    </div>
                    <div>
                        <input
                            type="button"
                            id="Pagos extras"
                            value="Pagos extras"
                            className={styles.paymentsOptions}
                            onClick={goToExtraPaymentPage}
                        ></input>
                    </div>

                    <div>
                        <input
                            type="button"
                            id="Servicios de la comunidad"
                            value="Servicios de la comunidad"
                            className={styles.paymentsOptions}
                            onClick={goToCommunityGeneralPaymentPage}
                        ></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
