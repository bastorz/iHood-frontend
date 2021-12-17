import React, { useState } from 'react';
import styles from './css/Signup.module.css';
import { Icon } from '@iconify/react';
import CheckMasterRole from './CheckRole';
import SignupFooter from './SignupFooter';
import {Button} from "../Button/Button"
import { CommunityService } from "../../services/community.service";

//state type

export const SignUp = () => {

    const [userRegistration, setuserRegistration] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setuserRegistration({...userRegistration, [name] : value});
    
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
      
      /* const registrationCode = await CommunityService.sendRegistrationData('') */

      setRecords([...records, newRecord]);

      console.log(records);
      /* console.log(registrationCode) */

      setuserRegistration({ name: "", email: "", phone: "", password: "" })

    }

   

  return (
      <div className={styles.signupContainer}>
        <div className={styles.langNav} >
          <Icon className={styles.flag} icon="emojione:flag-for-spain" />
          <Icon className={styles.flag} icon="emojione:flag-for-united-kingdom" />
        </div>
        <form className={styles.inputContainer} noValidate autoComplete="off">
          <div className={styles.titleBox}> 
          <h1 className={styles.title}>Hi, Neighbor! </h1>
          <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
          </div>
          <div className={styles.inputs}>

            <form action="" onSubmit={handleSubmit}>
    
             <div className={styles.inputs}>
               <label htmlFor="name">Nombre</label>
               <input type="text" autoComplete="off"
               value={userRegistration.name}
               onChange={handleInput}
               name="name" id="name"/>
             </div>
             <div className={styles.inputs}>
               <label htmlFor="email">Email</label>
               <input type="text" autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
               name="email" id="email"/>
             </div>
             
             <div className={styles.inputs}>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" autoComplete="off"
                value={userRegistration.phone}
                onChange={handleInput}
                name="phone" id="phone"/>
             </div>

             <div className={styles.inputs}>
                <label htmlFor="password">Contraseña</label>
                <input type="password`" autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}
                name="password" id="password"/>
             </div>

             <div>

             <Button className="button-join-community" variant="blue" onClick={handleSubmit}>¡Unirse a la comunidad!</Button>
             
             </div>
            </form>

            <div>
              {
                records.map((curElem) => {
                  return(
                    <div className="showDataStyle">
                      <p>{curElem.nombre}</p>
                      <p>{curElem.email}</p>
                      <p>{curElem.telefono}</p>
                      <p>{curElem.contraseña}</p>
                    </div>
                  )
                })
              }
            </div>

          </div>
          <CheckMasterRole onCheck/>
        </form>
        <div className={styles.decoLinesContainer}>
            <div className={styles.decoLine1}></div>
            <div className={styles.decoLine2}></div>
            <div className={styles.decoLine3}></div>
            <div className={styles.decoLine4}></div>
            <div className={styles.decoLine5}></div>
        </div>
        <SignupFooter onGoHomeLog/>
      </div>
  );
}
