import React, { useState } from 'react';
import styles from './login.module.css';
import {Button} from "../Button/Button"
import { Icon } from '@iconify/react';
import { AuthService } from "../../services/auth.service";
import {useMainContext} from "../context/Main.context"
// import LoginFooter from './LoginFooter'

export const SignIn = () => {


    const [userSignIn, setuserSignIn] = useState({
      email: "",
      password: ""
    });

    const {setUser} = useMainContext()

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);

      setuserSignIn({...userSignIn, [name] : value});
    
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      const newRecord = { ...userSignIn }
      
    //  const registrationCode = await AuthService.signIn(newRecord)
     const whoami = await AuthService.whoami()

      setRecords([...records, newRecord]);


      setUser(whoami.data.user)

      setuserSignIn({ email: "", password: "" })

    }
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

                        <p>¡Accede a tu cuenta!</p>
                    
                        <div className={styles.inputs}>

                            <input type="email" className={styles.formControl} name="email" placeholder="Email" onChange={handleInput}
                            />

                            <input type="password" className={styles.formControl} name="password" placeholder="Contraseña" onChange={handleInput}
                            />

                            <Button className="registerBtn" onClick={handleSubmit}>Acceder a mi cuenta</Button>
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
                                <p>¿Aún no tienes cuenta?</p>
                            </div>
                            <div className={styles.containerLoginBottomUp}>
                                <Button className="" onClick={handleSubmit}>¡Regístrate aquí!</Button>
                            </div>
                        </div> 
                        </div>
                    </div>             
                </div>
            </div>
        );
    }



export default SignIn;
