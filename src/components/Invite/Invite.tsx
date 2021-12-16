import {Button} from "../Button/Button"
import { CommunityService } from "../../services/community.service";
import './css/Invite.css';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

export const Invite = () => {

    const [code, setCode] = useState("")

    const showInvitation = async () => {
        
        const invitationCode = await CommunityService.claimTenantInvitation('') 
        console.log(invitationCode)
        setCode(invitationCode.data.code)
        
    }

    return  <div className="container">
                <div className="block-left">
                    <p className="hola-presidente">¡Hola, presidente!</p>
                    <Icon className="icon-house" icon="noto:house-with-garden" />
                </div>
                <div className="block-mid">
                    <Icon className="user-icon" icon="carbon:user-avatar" color="#7879f1" />
                    <p className="middle-paragraph">Matthew Blake</p>
                    <p className="middle-paragraph">Matt-Bk@gmail.com</p>
                    <Button className="button-generate-invitation" variant="blue" >Editar perfil</Button>
                    <p className="middle-paragraph">¿Has añadido ya a todos los miembros de tu comunidad?</p>
                    <p className="middle-paragraph">¡Genera una nueva invitación aquí!</p>
                    <Button className="button-generate-invitation" variant="blue" onClick={showInvitation}>Genera un código de invitación</Button>
                    <div className="invitation-container">
                        <a href={code} target="_blank" rel="noreferrer"><p>{code}</p></a>
                    </div>
                    
                    
                    {/* <input placeholder={code} className="invitation-container" type="text" /> */}
                </div>
                <div className="block-right"></div>            
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

    
