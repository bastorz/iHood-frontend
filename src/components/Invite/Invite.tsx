/* import {Button} from "../Button/Button" */
import { CommunityService } from "../../services/community.service";
import styles from './Invite.module.css';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

export const Invite = () => {

    const [code, setCode] = useState("")

    const showInvitation = async () => {
        
        const invitationCode = await CommunityService.claimTenantInvitation('') 
        console.log(invitationCode) 
        setCode(invitationCode.data.code)
        
    }

    return  <div className={styles.container}>
                <div className={styles.blockLeft}>
                    <p className={styles.holaPresidente}>¡Hola, presidente!</p>
                    <Icon className={styles.iconHouse} icon="noto:house-with-garden" />
                </div>
                <div className={styles.blockMid}>
                    <div className={styles.blockMidTop}>
                        <p className={styles.title}>Bienvenido a iHood!</p>
                        <Icon className={styles.houseIcon} icon="noto:house-with-garden" />
                    </div>
                    <div className={styles.blockMidBottom}>
            
                    <Icon className={styles.userIcon} icon="carbon:user-avatar" color="#ffffff" />
                    <p className={styles.middleParagraph}>Matthew Blake</p>
                    <p className={styles.middleParagraph}>Matt-Bk@gmail.com</p>
                    
                    <p className={styles.middleParagraph}>¿Has añadido ya a todos los miembros de tu comunidad?</p>
                    <p className={styles.middleParagraph}>¡Genera una nueva invitación aquí!</p>
                    <input      
                                className={styles.buttonGenerateInvitation}
                                type="button"
                                id="Pagos de la comunidad"
                                value="Generar invitación"
                                onClick= {showInvitation}
                            ></input>
                    <div className={styles.invitationContainer}>
                        <input className = {styles.invitationHold}  type="text" value={code}></input>
                    </div>
                    
                </div>    
                    {/* <input placeholder={code} className="invitation-container" type="text" /> */}
                </div>
                <div className={styles.blockRight}></div>            
            </div>
}











/* const data = { invitation }
const options = { 
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};{
fetch('http://localhost:5000/code-generator', options); */

    
