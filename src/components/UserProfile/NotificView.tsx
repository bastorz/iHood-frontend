// import React, {useEffect, useState} from 'react'
import styles from './css/NotificView.module.css';
import { Icon } from '@iconify/react';



const Notif = () =>{

  let NotifContent = {
      title: "Hola, ",
      description: "Soy un mensaje de prueba",
      statusNew: true,
  };

    const handleOpenMessage =() => {
      NotifContent.title = "Adios"
      console.log(NotifContent.title)
    }

    let Button = ({ title, content, /*statusNew,*/ onChange, onClick}) => {
      return (
        <button onClick={onChange} onChange={onChange}>
          {title}
          {content}
          {/* {statusNew} */}
        </button>
      )
    }

    return (
      <div className={styles.notifContainer}>
        <div className={styles.titleBox}>
          <h2>Notificaciones</h2>
          <Icon className= {styles.iconNotif} icon="bx:bx-mail-send" />
        </div>
        <div className={styles.notifBox}>
          <Button
            title={NotifContent.title}
            content={NotifContent.description}
            // title={NotifContent.length[0].title}          
            // content={NotifContent.length[0].description}
            // statusNew={click}
            onClick={onchange}
            onChange={handleOpenMessage}
          />
          <Button
            title={NotifContent.title}
            content={NotifContent.description}
            // title={NotifContent.length[1].title}          
            // content={NotifContent.length[1].description}
            // statusNew={click}
            onClick={onchange}
            onChange={handleOpenMessage}
          />
          <Button
            title={NotifContent.title}
            content={NotifContent.description}
            // title={NotifContent.length[2].title}          
            // content={NotifContent.length[2].description}
            // statusNew={click}
            onClick={onchange}
            onChange={handleOpenMessage}
          />
          <Button
            title={NotifContent.title}
            content={NotifContent.description}
            // title={NotifContent.length[3].title}          
            // content={NotifContent.length[3].description}
            // statusNew={click}
            onClick={onchange}
            onChange={handleOpenMessage}
          />
          <Button
            title={NotifContent.title}
            content={NotifContent.description}
            // title={NotifContent.length[3].title}          
            // content={NotifContent.length[3].description}
            // statusNew={click}
            onClick={onchange}
            onChange={handleOpenMessage}
          />
        </div>
        
      </div>
    )
}

export default Notif