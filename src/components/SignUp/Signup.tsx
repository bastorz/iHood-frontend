import React, { useReducer, useEffect, useState } from 'react';
import styles from './css/Signup.module.css';
import { Icon } from '@iconify/react';
import CheckMasterRole from './CheckRole';
import SignupFooter from './SignupFooter';

//state type

export const MultipleInputs = () => {

  return (
      <div className={styles.signupContainer}>
        <div className={styles.langNav} >
          <Icon className={styles.flag} icon="emojione:flag-for-spain" />
          <Icon className={styles.flag} icon="emojione:flag-for-united-kingdom" />
        </div>
        <form className={styles.inputContainer} noValidate autoComplete="off">
          <div className={styles.titleBox}> 
          <h1 className={styles.title}>Hi, Neighbor! </h1>
          <Icon className= {styles.iconHouse} icon="noto:house-with-garden" />
          </div>
          <div className={styles.inputs}>

              <label htmlFor="username">Fullname</label>
              <input type="text" autoComplete="off"
              value="te"/>

              <input type="text" className="username" placeholder="&#xf007;  Nombre" onChange={handleUsernameChange} onKeyPress={handleKeyPress} required/>

              <input type="email" className="email" placeholder="Email" onChange={handleEmailChange} onKeyPress={handleKeyPress} required autocomplete="off"/>

              <input type="tel" className="movil" placeholder="Telefono" onKeyPress={handleKeyPress}/>
              <input type="password" className="password" placeholder="Password" onChange={handlePasswordChange} onKeyPress={handleKeyPress} required/>

              <button className={styles.loginBtn} onClick={handleSignup} disabled={state.isButtonDisabled}>Registrate</button>
          
          
          
          
          
          
          </div>
          <CheckMasterRole onCheck={handleCheckChange}/>
        </form>
        <div className={styles.decoLinesContainer}>
            <div className={styles.decoLine1}></div>
            <div className={styles.decoLine2}></div>
            <div className={styles.decoLine3}></div>
            <div className={styles.decoLine4}></div>
            <div className={styles.decoLine5}></div>
        </div>
        <SignupFooter onGoHomeLog={onGoHomeLog}/>
      </div>
  );
}
