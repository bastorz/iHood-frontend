import {Button} from "../Button/Button"
import './css/EnterInvitation.css';
import { Icon } from '@iconify/react';
import React, {useState} from 'react'
import { CommunityService } from "../../services/community.service";

export const EnterInvitation = () => {

    const [invitation, setInvitation] = useState('');
    
    const submitValue = async () => {
        const invitationCode = await CommunityService.sendInvitationCode('')
        console.log(invitation)
        console.log("hola", invitationCode);
    }



    return  <div className="container">
                <div className="block-left">
                    <p className="hola-presidente">¡Hola, vecino!</p>
                    <Icon className="icon-house" icon="noto:house-with-garden" />
                </div>
                <div className="block-mid">
                    <Icon className="user-icon" icon="carbon:user-avatar" color="#7879f1" />
                    <p className="middle-paragraph">Matthew Blake</p>
                    <p className="middle-paragraph">Matt-Bk@gmail.com</p>
                    <Button className="button-generate-invitation" variant="blue" >Editar perfil</Button>
                    <p className="middle-paragraph">¿Aún no formas parte de la mejor comunidad?</p>
                    <p className="middle-paragraph">¡Únete utilizando el código de invitación!</p>
                   {/*  <Button className="button-generate-invitation" variant="blue" onClick={showInvitation}>Genera un código de invitación</Button> */}
                    <input type="text" placeholder="Copia aquí el código de invitación..." className="invitation-container" onChange={e => setInvitation(e.target.value)}/>   
                    <Button className="button-join-community" variant="blue" onClick={submitValue}>¡Unirse a la comunidad!</Button>                               
                    {/* <input placeholder={code} className="invitation-container" type="text" /> */}
                </div>
                <div className="block-right"></div>            
            </div>
}
