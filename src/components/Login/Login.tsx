import React, { Component } from 'react';
import './css/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import { Icon } from '@iconify/react';
// import LoginFooter from './LoginFooter'

const baseUrl="http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
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
                <input type="text" className="form-control" name="username" placeholder="Usuario" onChange={this.handleChange}
                />

                <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={this.handleChange}
                />
            </div>
            <div className="login2">
                <div className="rememberMe">
                    <label className="textFormat">
                        <input type="checkbox" />Recuerdame
                    </label>
                    <p className="textFormat">¿Hás olvidado tu contraseña?</p>
                </div>
                <button className="loginBtn" onClick={()=> this.iniciarSesion()}>Iniciar Sesión</button>
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
                        <button className="registerText" onClick={()=> this.iniciarSesion()}>Registrate aquí</button>
                    </div> 
                </div>

            </div>
            {/* <LoginFooter onGoHomeLog={onGoHomeLog}/> */}
        </div>
    </div>
        );
    }
}


export default Login;
