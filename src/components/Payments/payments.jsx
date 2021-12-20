import React, { useState, useEffect } from 'react'
import styles from './payments.module.css'
import { Icon } from '@iconify/react'
import { Popup } from '../Popup/Popup'
import { PaymentsService } from '../../services/payment.service'

export const Payment = () => {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen)
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
                            id="Pagos de la comunidad"
                            value="Pagos de la comunidad"
                            className={styles.paymentsOptions}
                            onClick={togglePopup}
                        ></input>
                        {isOpen && (
                            <Popup content={<></>} handleClose={togglePopup} />
                        )}
                    </div>

                    <div>
                        <input
                            type="button"
                            id="Pagos extras"
                            value="Pagos extras"
                            className={styles.paymentsOptions}
                            onClick={togglePopup}
                        ></input>
                        {isOpen && (
                            <Popup
                                content={
                                    <>
                                        <b>Design your Popup</b>
                                        <p>hola</p>
                                    </>
                                }
                                handleClose={togglePopup}
                            />
                        )}
                    </div>

                    <div>
                        <input
                            type="button"
                            id="Servicios de la comunidad"
                            value="Servicios de la comunidad"
                            className={styles.paymentsOptions}
                            onClick={togglePopup}
                        ></input>
                        {isOpen && (
                            <Popup
                                content={
                                    <>
                                        <b>Design your Popup</b>
                                        <p>hola</p>
                                    </>
                                }
                                handleClose={togglePopup}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
