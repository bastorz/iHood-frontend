import React, { useState } from 'react';
import styles from './CreateCommunity.module.css';
import {Button} from "../Button/Button"
import { AuthService } from "../../services/auth.service";

export const CreateCommunity = () => {

    const [records, setRecords] = useState([]);

    const [createCommunity, setCreateCommunity] = useState({
        name: "",
        address: "",
        city: "",
        appartments: ""
      });

      const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
  
        setCreateCommunity({...CreateCommunity, [name] : value});
      
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
  
        const newRecord = { ...createCommunity }
        
       const registrationCode = await AuthService.createCommunity(newRecord)
  
        setRecords([...records, newRecord]);
  
        console.log(records);
        console.log(registrationCode)
  
        setCreateCommunity({ name: "", address: "", city: "", appartments: "" })
  
      }


    return(
        <div className={styles.container}>
            <div className={styles.containerCreateCommunity}>
                <h1>Rellena los datos de tu comunidad</h1>
                <p>Nombre de la comunidad</p>
                <input type="text" className={styles.input} name="name" onChange={handleInput}></input>
                <p>Dirección</p>
                <input type="text" className={styles.input} name="address" onChange={handleInput}></input>
                <p>Ciudad</p>
                <input type="text" className={styles.input} name="city" onChange={handleInput}></input>
                <p>Número de apartamentos</p>
                <input type="number" className={styles.input} name="appartments" onChange={handleInput}></input>

                <Button onClick={handleSubmit}>Crear comunidad</Button>
            </div>
        </div>
    )
} 