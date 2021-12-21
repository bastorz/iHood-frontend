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
                <Icon
                    className={styles.iconHouse}
                    icon="noto:house-with-garden"
                />
            </div>
            <div className={styles.blockMid}>
                <Icon
                    className={styles.userIcon}
                    icon="carbon:user-avatar"
                    color="#7879f1"
                />
                <p className={styles.middleParagraph}>Matthew Blake</p>
                <p className={styles.middleParagraph}>Matt-Bk@gmail.com</p>
                <input
                    className={styles.buttonEditProfile}
                    type="button"
                    id="Pagos de la comunidad"
                    value="Edita tu perfil"
                ></input>
                <p className={styles.middleParagraph}>
                    ¿Aún no formas parte de la mejor comunidad?
                </p>
                <p className={styles.middleParagraph}>
                    ¡Únete utilizando el código de invitación!
                </p>
                {/*  <Button className="button-generate-invitation" variant="blue" onClick={showInvitation}>Genera un código de invitación</Button> */}
                <input
                    type="text"
                    className={styles.inputs}
                    name="name"
                    placeholder="Nombre de la comunidad"
                    onChange={handleInput}
                />
                <Button onClick={handleSubmit}>Crear comunidad</Button>
                {/* <input placeholder={code} className="invitation-container" type="text" /> */}
            </div>
            <div className={styles.blockRight}></div>
        </div>
    )
}
