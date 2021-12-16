import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './css/TextCarousel.module.css';

class TextCarousel extends Component {
    render() {
        return (
            <Carousel className={styles.carouselContainer}>
                <div className={styles.textContainer}>                    
                    <p className={styles.textFormat}>Un lugar para facilitarte la comunicación entre todos los vecinos de tu edificio o comunidad.</p>
                    <p className={styles.textFormat}>Ya seas el presidente de tu comunidad, el vecino independiente que nunca se entera de las reuniones o la señora de los gatos del 3ºA, en "iHood" hay un lugar para ti! </p>
                </div>
                <div className={styles.textContainer}>                    
                    <p className={styles.textFormat}>Aquí podrás crear tu propia comunidad, personalizandola tanto como quieras, añadir vecinos, gestionar sus incidencias y pagos, incluso ¡enviar notificaciones! </p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.textFormat}>Tendrás un perfil personal desde donde podrás gestionar tu información de usuario además de todas las herramientas que te ofrece "iHood"</p>
                    <p className={styles.textFormat}>Buzón de notificaciones, Formulario de incidencias, ¡hasta un calendario de eventos!</p>
                </div>
                <div className={styles.textContainer}>
                    <h3 className={styles.titleFormat}>¿Y los vecinos?</h3>
                    <p className={styles.textFormat}>Una vez que el presidente haya dado de alta su comunidad, tendrá la opción de enviarle un link de invitación a cada uno de sus vecinos. Una vez registrados, tendrán acceso a todas las herramientas para formar parte de la comunidad iHood!!</p>
                </div>
            </Carousel>
        );
    }
};

export default TextCarousel
