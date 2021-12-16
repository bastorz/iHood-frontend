import styles from './css/Footer.module.css';



const LoginFooter = ({onGoHomeSignup}) => {
        return (
        <div className={styles.footer}>
            <p className={styles.textFormat}>¿Ya estás registrado en iHood? </p>
            
            <button className={styles.loginButton} onClick={onGoHomeSignup}>Accede aquí</button>
            
            {/* <div className="bottom">
                <p className="bottomText">
                    ¿No eres miembro aún?
                </p>
                <div className="registerButton">
                    <div>
                        <button className="registerText" onClick={()=> this.iniciarSesion()}>Registrate aquí</button>
                    </div> 
                </div>
            </div> */}
        </div>
    )    
}


export default LoginFooter