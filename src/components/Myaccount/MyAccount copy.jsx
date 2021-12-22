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
            <div className={styles.containertop}>
                <div className={styles.blocktop}>
                    <div>
                        {' '}
                        <p className={styles.myaccount}>
                            Mi cuenta{' '}
                            <Icon
                                className={styles.usericon}
                                icon="bx:bxs-user-pin"
                                color="#7879f1"
                            />
                        </p>{' '}
                    </div>
                </div>

                <div className={styles.blockmid}>
                    <div className={styles.datacontainer}>
                        <input
                            type="text"
                            placeholder="Pon tu nuevo correo"
                            name="email"
                            onChange={handleInput}
                        ></input>
                        <input
                            type="text"
                            placeholder="Pon tu nuevo nombre"
                            name="name"
                            onChange={handleInput}
                        ></input>
                        <input
                            type="text"
                            placeholder="Pon tu nueva Contraseña"
                            name="password"
                            onChange={handleInput}
                        ></input>
                        <input
                            type="text"
                            placeholder="Pon tu nueva vivienda"
                            name="appartment_data"
                            onChange={handleInput}
                        ></input>
                        <input
                            type="button"
                            value="Actualizar perfil"
                            onClick={handleSubmit}
                        ></input>
                    </div>
                </div>
            </div>

            <div className={styles.containerbottom}>
                <div className={styles.blockbottomdown}></div>
            </div>
        </div>
    )
}
