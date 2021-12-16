import styles from './css/SignupFooter.module.css';



const SignupFooter = ({onGoHomeLog}) => {
        return (
        <div className={styles.signupFooter}>
            <p className={styles.textFormat}>¿Ya estás registrado en iHood? </p>
            
            <button className={styles.loginButton} onClick={onGoHomeLog}>Accede aquí</button>
        </div>
    )    
}

export default SignupFooter