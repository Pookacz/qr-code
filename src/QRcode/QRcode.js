import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './QRcode.module.scss';

const QRcode = ({ text }) => {
  const [qrcode, setQrcode] = useState("");
  const options = {
    method: "GET",
    url: "https://chart.googleapis.com/chart?",
    params: { cht: "qr", chs: "300x300", chl: { text } },
    responseType: "arraybuffer",
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      setQrcode(
        `data:${res.headers["content-type"].toLowerCase()};base64,${btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        )}`
      );
    }).catch((error) => {
      console.log(error)
    });
  });

  return (
    <div>
      <div className={styles.loaderContainer}>

        {!qrcode && <div className={styles.loader}></div>}
      </div>
      {qrcode && <img src={qrcode} alt={"Your QR code."} />}
    </div>
  );
};

export default QRcode;
