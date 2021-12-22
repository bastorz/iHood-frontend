import styles from './EnterInvitation.module.css'
import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { CommunityService } from '../../services/community.service'
import { Button } from '../Button/Button'

export const EnterInvitation = () => {
    const [saveCode, setSaveCode] = useState({
        name: '',
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setSaveCode((oldstate) => ({ ...oldstate, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newRecord = { ...saveCode }

        const registrationCode = await CommunityService.sendInvitationCode(
            newRecord
        )

        console.log(registrationCode)

        setSaveCode({ name: '' })
    }

    return (
        <div className={styles.container}>
            <div className={styles.blockLeft}>
                <p className={styles.holaPresidente}>¡Hola, vecino!</p>
            </div>
            <div className={styles.blockMid}>
                <p className={styles.middleParagraph}>
                    ¿Aún no formas parte de la mejor comunidad?
                </p>
                <p className={styles.middleParagraph}>
                    ¡Únete utilizando el código de invitación!
                </p>

                <input
                    type="text"
                    className={styles.inputs}
                    name="name"
                    placeholder="Código de invitación"
                    onChange={handleInput}
                />
                <Button className={styles.inputs2} onClick={handleSubmit}>
                    ¡Unirse a la comunidad!
                </Button>
            </div>
            <div className={styles.blockRight}></div>
        </div>
    )
}
