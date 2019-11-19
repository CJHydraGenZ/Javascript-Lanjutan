import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    text: "Text disini"
  };

  // callNamaDepan = callback => {
  //   setTimeout(() => {
  //     callback("cahya");
  //   }, 3000);
  // };

  // callNamaBelakang = cb => {
  //   setTimeout(() => {
  //     cb("Ari");
  //   }, 3000);
  // };

  // login = () => {
  //   this.callNamaDepan(result => {
  //     const namaDepan = result;

  //     this.callNamaBelakang(result2 => {
  //       const namaBelakang = result2;
  //       const namaLengkap = namaDepan + namaBelakang;

  //       this.setState({
  //         text: namaLengkap
  //       });
  //     });
  //   });
  // };

  callNamaDepan = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Cahya");
      }, 3000);
    });
  };

  callNamaBelakang = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Ari");
      }, 3000);
    });
  };

  login = async () => {
    const namaDepan = await this.callNamaDepan();
    const namaBelakang = await this.callNamaBelakang();

    const nama = namaDepan + namaBelakang;
    this.setState({
      text: nama
    });

    // Promise.all([this.callNamaDepan(), this.callNamaBelakang()]).then(
    //   ([result, result2]) => {
    //     this.setState({
    //       text: result + result2
    //     });
    //   }
    // );

    // this.callNamaDepan()
    //   .then(result => {
    //     return this.callNamaBelakang(result);
    //   })
    //   .then(result2 => {
    //     this.setState({
    //       text: result2
    //     });
    //   });
  };

  render() {
    const { text } = this.state;
    const { login } = this;
    return (
      <div className="App">
        <button className="btn-login" onClick={login}>
          Login
        </button>
        <hr />
        <div />
        <h2>{text}</h2>
        <hr />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
