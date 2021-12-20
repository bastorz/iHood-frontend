import React, { useState, useEffect } from 'react'
import styles from './Popup.module.css'
import { PaymentsService } from '../../services/payment.service'

export const Popup = (props) => {
    const [payment, setPayment] = useState([])

    useEffect(() => {
        const onMount = async () => {
            const data = await PaymentsService.getPaymentsData('')
            console.log({ data })
            setPayment(data.data)
        }
        onMount()
    }, [])

    const displayPaymentData = () => {
        return payment.map((payment, index) => (
            <div className={styles.popupBox}>
                <div className={styles.box}>
                    <span
                        className={styles.closeIcon}
                        onClick={props.handleClose}
                    >
                        x
                    </span>
                    {props.content}
                </div>
            </div>
        ))
    }

    return <div>{displayPaymentData()}</div>
}
