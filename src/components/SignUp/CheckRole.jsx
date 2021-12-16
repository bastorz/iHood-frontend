import styles from './css/CheckRole.module.css';
import React from 'react';

const CheckMasterRole = ({onCheck}) => {
    const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = () => {
    const newChecked = !checked
    setChecked(newChecked);
    onCheck(newChecked)
  };

    return (
      <div className={styles.checkBoxContainer}>
        <p className={styles.textFormat}>¿Eres el presidente de tu comunidad?</p>
        <div className={styles.checkBox}>
          <Checkbox
          label="Sí!"
          value={checked}
          onChange={handleChangeCheck}
        />
        {/* <p>Is "My Value" checked? {checked.toString()}</p> */}
        </div>
      </div>
      );
  };

  const Checkbox = ({ label, value, onChange }) => {
    return (
        <label className={styles.textFormat}>
          <input type="checkbox" checked={value} onChange={onChange}/>
          {label}
        </label>
      );
    };

export default CheckMasterRole