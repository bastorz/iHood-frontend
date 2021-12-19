import React, { useState } from 'react';
import './SignUp.css';
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

   

  return (

    <div className="mainContainer">
    <div className="containerPrincipal">
        <div className="containerTop">
            <div>
                <Icon className="flag" icon="emojione:flag-for-spain" />
            </div>
            <div>
                <Icon className="flag" icon="emojione:flag-for-united-kingdom" />
            </div>
        </div>
        <div className="login">
            <div className="title">
            <div className="hiNeighbor">
                Bienvenido a iHood!

            </div>
            <div className="houseIcon">
                <Icon className="iconHouse" icon="noto:house-with-garden" />
            </div>
            </div>
            <div className="inputs">
                <input type="text" className="form-control" name="email" placeholder="Email" onChange={handleInput}
                />

                <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleInput}
                />

                <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleInput}
                />

                <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleInput}
                />
            </div>
            <div className="login2">
                <div className="rememberMe">
                    <label className="textFormat">
                        <input type="checkbox" />Recuerdame
                    </label>
                    <p className="textFormat">¿Hás olvidado tu contraseña?</p>
                </div>
                <button className="loginBtn" onClick={handleSubmit}>Iniciar Sesión </button>
            </div>
        </div>
        <div className="decoLinesContainer">
            <div className="decoLine1"></div>
            <div className="decoLine2"></div>
            <div className="decoLine3"></div>
            <div className="decoLine4"></div>
            <div className="decoLine5"></div>
        </div>
        <div className="containerBottom">
        <div className="bottom">
                <p className="bottomText">
                    ¿No eres miembro aún?
                </p>
                <div className="registerButton">
                    <div>
                        <button className="registerText" onClick={handleSubmit}>Registrate aquí</button>
                    </div> 
                </div>

            </div>
            {/* <LoginFooter onGoHomeLog={onGoHomeLog}/> */}
        </div>
    </div>
    </div>
        );
    }