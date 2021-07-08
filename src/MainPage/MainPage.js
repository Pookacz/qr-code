import React from "react";
import Button from '../Button/Button';
import styles from './MainPage.module.scss';

const MainPage = ( {handleChange, generateQRcode} ) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>QR Code</span>
      <span className={styles.subtitle}>Generator</span>
      <input
        className={styles.input}
        placeholder='eg. Hello World!'
        type={"text"}
        onChange={handleChange}
        name="text"
        autoComplete="off"
      />
      <Button title='Generate.' onClick={generateQRcode}/>
    </div>
  );
};

export default MainPage;
