import React from "react";
import './index.css'
import MainPage from "../MainPage/MainPage";
import QRpage from "../QRpage/QRpage";

class Root extends React.Component {
  state = {
    isQRcodeGenerated: false,
    text: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  generateQRcode = () => {
    this.setState({
      isQRcodeGenerated: true,
    });
  };

  newCase = () => {
    this.setState({
      isQRcodeGenerated: false,
      text: "",
    });
  };

  render() {
    const { isQRcodeGenerated } = this.state;
    return (
      <div>
        { !isQRcodeGenerated && <MainPage handleChange={this.handleChange} generateQRcode={this.generateQRcode}/> }
        { isQRcodeGenerated && <QRpage text={this.state.text} newCase={this.newCase}/> }
      </div>
    );
  }
}

export default Root;
