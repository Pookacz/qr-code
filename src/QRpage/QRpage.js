import React from "react";
import QRcode from "../QRcode/QRcode";
import Button from '../Button/Button';
import styles from './QRpage.module.scss'

const QRpage = ({ text, newCase }) => {
  return (
    <div className={styles.wrapper}>
      <QRcode text={text} />
      <Button title='Back.' onClick={newCase}/>
    </div>
  );
};

export default QRpage;
