import React from "react";
import QRcode from "./QRcode/QRcode";

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
    console.log("it works");
    this.setState({
      isQRcodeGenerated: true,
    });
  };

  newGenerate = () => {
    this.setState({
      isQRcodeGenerated: false,
      text: "",
    });
  };

  render() {
    const { isQRcodeGenerated } = this.state;
    return (
      <div>
        {!isQRcodeGenerated && (
          <input type={"text"} onChange={this.handleChange} name="text" autoComplete='off'/>
        )}
        {!isQRcodeGenerated && (
          <button onClick={this.generateQRcode}>Generate.</button>
        )}
        {isQRcodeGenerated && <QRcode text={this.state.text} />}
        {isQRcodeGenerated && <button onClick={this.newGenerate}>back</button>}
      </div>
    );
  }
}

export default Root;
