import styles from './css/Home.module.css';
import { Icon } from '@iconify/react';
import TextCarousel from './TextCarousel';
import SignUp from '../SignUp/Signup';

export const HomeSignup = ({ onSignup, onGoHomeLog }) => {
return (
    <div className={styles.homeContainer}>
        <div className={styles.welcomeContainer}>
            <h1 className={styles.welcome}>Bienvenidos a la web de iHood!</h1>

            <TextCarousel />

            <Icon className= {styles.icon} icon="noto:house-with-garden" />
            
            <p className={styles.textFormat}>Entra y descubre una nueva forma de comunicarte con tus vecinos!</p>
        </div>
        <div className={styles.decoLinesContainer}>
            <div className={styles.decoLine1}></div>
            <div className={styles.decoLine2}></div>
            <div className={styles.decoLine3}></div>
            <div className={styles.decoLine4}></div>
            <div className={styles.decoLine5}></div>
        </div>
        <div className={styles.signinContainer}>
            <SignUp onSignup={onSignup} onGoHomeLog={onGoHomeLog}/>
        </div>
    </div>
    
)
}