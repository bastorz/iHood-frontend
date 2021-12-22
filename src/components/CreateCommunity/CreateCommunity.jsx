import React, { useState } from 'react'
import styles from './CreateCommunity.module.css'
import { Button } from '../Button/Button'
import { AuthService } from '../../services/auth.service'

export const CreateCommunity = () => {
    const [records, setRecords] = useState([])

    const [createCommunity, setCreateCommunity] = useState({
        name: '',
        address: '',
        city: '',
        appartments: '',
    })

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(name, value)

        setCreateCommunity((oldstate) => ({ ...oldstate, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newRecord = { ...createCommunity }

        const registrationCode = await AuthService.createCommunity(newRecord)

        setRecords([...records, newRecord])

        console.log(records)
        console.log(registrationCode)

        setCreateCommunity({ name: '', address: '', city: '', appartments: '' })
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerCreateCommunity}>
                <h1 className={styles.title}>Rellena los datos de tu comunidad</h1>
                <p className={styles.title}>Nombre de la comunidad</p>

                <input
                    type="text"
                    className={styles.inputs}
                    name="name"
                    placeholder="Nombre de la comunidad"
                    onChange={handleInput}
                />
                <p className={styles.title}>Dirección</p>
                <input
                    type="text"
                    className={styles.inputs}
                    name="address"
                    placeholder="Dirección"
                    onChange={handleInput}
                />
                <p className={styles.title}>Ciudad</p>
                <input
                    type="text"
                    className={styles.inputs}
                    name="city"
                    placeholder="Ciudad"
                    onChange={handleInput}
                />
                <p className={styles.title}>Nº de apartamentos</p>
                <input 
                    type="number"
                    className={styles.inputs}
                    name="appartments"
                    placeholder="Nº de apartamentos"
                    onChange={handleInput}
                />

                <Button className={styles.buttonGenerateInvitation} onClick={handleSubmit}>Crear comunidad</Button>
            </div>
        </div>
    )
}
