import styles from './css/UserMasterInfo.module.css'
import { Icon } from '@iconify/react';

const UserInfo = () => {
    return(
        <div className={styles.userInfoContainer}>
                      <div className={styles.userInfo}>
            <div className={styles.userInfoLeft}>
                <div className={styles.userNameCont}>
                <div className={styles.userName}>Nombre: Silvia</div>
                <div className={styles.userEmail}>Email: Silvia@ihood.es</div>
                </div>
            </div>
            <div className={styles.userInfoRight}>                
                <div className={styles.userImage}>
                        Foto de Perfil
                </div>
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
                            <div>Los Alisios, Madrid</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.decoSingleLine}></div>

            <div className={styles.myHomeContainer}>
                <div className={styles.myHomeContent}>
                    <div className={styles.myHomeInfo}>
                        <div>Apartamento</div>
                        <div>- 1ºB -</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo