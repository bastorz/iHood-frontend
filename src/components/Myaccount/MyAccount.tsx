import * as React from "react";

import {Button} from "../Button/Button"
import { Icon } from '@iconify/react';
import styles from '../Myaccount/MyAccount.module.css';
import { AuthService } from "../../services/auth.service";

export const Myaccount = () => {
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    const onMount = async () => {
      const data = await AuthService.whoami()
      setUser(data.data)
    }
    onMount()
  }, [])


  const handleInput = (e) => {
    e.preventDefault();
  }  

return (
  <div className={styles.container}>
    <div className={styles.containertop}>
      <div className={styles.blocktop}>
        <div> <p className={styles.myaccount}>Mi cuenta <Icon className={styles.usericon} icon="bx:bxs-user-pin" color="#7879f1" /></p> </div>
      </div>
      <div className={styles.blockmid}>

        <div className={styles.emailcontainer}> 
              <Button className={styles.botones} variant="blue" >Cambiar email</Button>
        <div className={styles.emailedit}> 
              <input type="email" className={styles.inputstyle} name="email" placeholder="Antiguo email..." onChange={handleInput}/>
              <input type="email" className={styles.inputstyle} name="email" placeholder="Nuevo email..." onChange={handleInput}/>
        </div>
        </div>

        <div className={styles.usercontainer}> 
              <Button className={styles.botones} variant="blue" >Cambiar usuario</Button>
        <div className={styles.useredit}> 
              <input type="user" className={styles.inputstyle} name="email" placeholder="Antiguo usuario" onChange={handleInput}/>
              <input type="email" className={styles.inputstyle} name="email" placeholder="Nuevo usuario" onChange={handleInput}/>
        </div>
        </div>
                
         <div className={styles.passwordcontainer}> 
                <Button className={styles.botones} variant="blue" >Cambiar contraseña</Button>
         <div className={styles.passwordedit}> 
                <input type="email" className={styles.inputstyle} name="email" placeholder="Antigua contraseña" onChange={handleInput}/>
                <input type="password" className={styles.inputstyle} name="password" placeholder="Nueva contraseña" onChange={handleInput}/>
        </div>
        </div>
                  
      </div> 
    
    </div>
                  
    <div className={styles.containerbottom}>
      
      <div className= {styles.blockbottomdown}></div>


      
      
    </div>
    
  </div>
    
)
}