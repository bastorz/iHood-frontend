import styles from './payments.module.css';
import { Icon } from '@iconify/react';
import {Button} from "../Button/Button"

export const Payment = () => {
  return (
    <div className={styles.container}>
        <div className={styles.paymentsContainer}>
            <div className={styles.paymentsContainerTop}>
                <p className={styles.paragraph}>Pagos de la comunidad</p>
                <Icon className={styles.cardIcon} icon="bi:credit-card" color="#7879f1" />
            </div>   
            <div className={styles.paymentsContainerBot}>
               <div >
                   <Button className={styles.paymentsOptions}>
                       Pagos generales
                   </Button>
               </div>

               <div >
                   <Button className={styles.paymentsOptions}>
                   Pagos extras
                   </Button>
               </div>

               <div >
                   <Button className={styles.paymentsOptions}>
                   Servicios de la comunidad
                   </Button>
               </div>
            </div>    
        </div>

    </div>
  );
}
