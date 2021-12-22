import styles from './css/UserInfo.module.css'
import { Icon } from '@iconify/react';

const UserInfo = () => {
    return(
        <div className={styles.userInfoContainer}>
            <div className={styles.userInfo}>
                <div className={styles.userImage}>
                    Foto de Perfil
                </div>
                <div className={styles.userNameCont}>
                    <div className={styles.userName}>Nombre Usuario</div>
                    <div className={styles.userEmail}>Email Usuario</div>
                </div>
            </div>

            <div className={styles.decoSingleLine}></div>

            <div className={styles.communityContainer}>
                <div className={styles.communityContent}>
                    <div className={styles.iconBox}>
                        <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
                    </div>
                    <div className={styles.communityInfo}>
                        <h2>Mi Comunidad de Vecinos</h2>
                        <div className={styles.location}>
                            <Icon className= {styles.iconLocation} icon="entypo:location-pin" />
                            <div>Localización</div>
                        </div>
                    </div>
                </div>

                <div className={styles.presidentContent}>
                    <div className={styles.presiImageBOX}>
                        <div className={styles.presiImage}>
                            Foto
                        </div>
                    </div>
                    <div className={styles.presidentInfo}>
                        <h3>Mi Presidente</h3>
                        <div className={styles.presiName}>Nombre Presidente Comunidad</div>
                    </div>
                </div>
            </div>

            <div className={styles.decoSingleLine}></div>

            <div className={styles.myHomeContainer}>
                <div className={styles.myHomeContent}>
                    <div className={styles.myHomeInfo}>
                        <div>- 3ºA -</div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default UserInfo