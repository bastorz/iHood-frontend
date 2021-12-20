import React, { useState } from 'react';
import styles from './registro.module.css';
import { Icon } from '@iconify/react';
import {Button} from "../Button/Button"
import { AuthService } from "../../services/auth.service";

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

      const newRecord = { ...userRegistration }
      
     const registrationCode = await AuthService.signUp(newRecord)

      setRecords([...records, newRecord]);

      console.log(records);
      console.log(registrationCode)

      setuserRegistration({ name: "", email: "", phone: "", password: "" })

    }

    <div className="blabla">asadadsadsadsad

        

    </div>
   

  return (

    <div className={styles.containerPrincipal}>
                <div className={styles.containerLogin}>
                    <div className={styles.containerLoginTop}>
                        <div ><p className={styles.title}>Bienvenido a iHood!</p>
                        </div>
                        <div>
                             <Icon className={styles.houseIcon} icon="noto:house-with-garden" />
                        </div>
                    </div>
                    <div className={styles.containerLoginMid}>

                        <p>¡Regístrate aquí!</p>
                    
                        <div className={styles.inputs}>
                            
                            <input type="text" className={styles.formControl} name="email" placeholder="Nombre de usuario" onChange={handleInput}
                            />

                            <input type="password" className={styles.formControl} name="password" placeholder="Email" onChange={handleInput}
                            />

                            <input type="password" className={styles.formControl} name="password" placeholder="Teléfono" onChange={handleInput}
                            />

                            <input type="password" className={styles.formControl} name="password" placeholder="Contraseña" onChange={handleInput}
                            />

                            <Button className="registerBtn" onClick={handleSubmit}>Registrarse</Button>
                        </div>
                    </div> 

                    <div className={styles.containerDecolines}>
                            <div className={styles.decolines1}></div>
                            <div className={styles.decolines2}></div>
                            <div className={styles.decolines3}></div>
                            <div className={styles.decolines4}></div>
                            <div className={styles.decolines5}></div>
                    </div>
                    <div className={styles.containerLoginBottom}>
                        <div className={styles.loginBtn}>
                        <div>
                            <div className={styles.containerLoginBottomUp}>
                                <p>¿Ya tienes cuenta?</p>
                            </div>
                            <div className={styles.containerLoginBottomUp}>
                                <Button className="" onClick={handleSubmit}>¡Entra aquí!</Button>
                            </div>
                        </div> 
                        </div>
                    </div>             
                </div>
            </div>
        );
    }