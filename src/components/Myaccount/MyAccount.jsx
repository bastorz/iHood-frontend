import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import styles from '../Myaccount/MyAccount.module.css'
import { ProfileService } from '../../services/profile.service'

export const Myaccount = () => {
    const [changeData, setChangeData] = useState({
        name: '',
        email: '',
        password: '',
        appartmentData: '',
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setChangeData((oldstate) => ({ ...oldstate, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newRecord = { ...changeData }

        const registrationCode = await ProfileService.sendProfileData(newRecord)

        console.log(registrationCode)

        setChangeData({
            name: '',
            email: '',
            password: '',
            appartmentData: '',
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.halfContainerTop}>
                <div className={styles.updateDataContainer}>
                    <h3>Escribe tu antiguo email</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="email"
                        placeholder="Email"
                        onChange={handleInput}
                    />
                    <h3>Escribe tu nuevo email</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="email"
                        placeholder="Email"
                        onChange={handleInput}
                    />
                </div>
                <div className={styles.updateDataContainer}>
                    <h3>Escribe tu antigua contraseña</h3>
                    <input
                        type="password"
                        className={styles.formControl}
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <h3>Escribe tu nueva contraseña</h3>
                    <input
                        type="password"
                        className={styles.formControl}
                        name="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                </div>
            </div>
            <div className={styles.halfContainerBottom}>
                <div className={styles.updateDataContainer}>
                    <h3>Escribe tu antiguo nombre de usuario</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="name"
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <h3>Escribe tu nuevo nombre de usuario</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="name"
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                </div>
                <div className={styles.updateDataContainer}>
                    <h3>Escribe tu antiguo apartamento</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="appartment"
                        placeholder="Apartamento"
                        onChange={handleInput}
                    />
                    <h3>Escribe tu nuevo apartamento</h3>
                    <input
                        type="text"
                        className={styles.formControl}
                        name="apartment"
                        placeholder="Apartamento"
                        onChange={handleInput}
                    />
                </div>
            </div>
        </div>
    )
}
