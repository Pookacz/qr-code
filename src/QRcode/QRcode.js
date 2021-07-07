import React, { useState, useEffect} from 'react';
import axios from 'axios';


const QRcode = ({ text }) => {

    const [qrcode, setQrcode] = useState("");
    const options = {
      method: 'GET',
      url: 'https://chart.googleapis.com/chart?',
      params: {cht: 'qr', chs: '200x200', chl: {text}},
      responseType: 'arraybuffer'
    }
    
    useEffect(()=> {
        axios.request(options).then((res) => {
            setQrcode(`data:${res.headers[
                "content-type"
              ].toLowerCase()};base64,${btoa(
                new Uint8Array(res.data).reduce(
                  (data, byte) => data + String.fromCharCode(byte),
                  ""
                )
              )}`)
            });
    });

    return(
        <div>

            <img src={qrcode} alt={'Your QR code.'}/>
        </div>
    )
}

export default QRcode;