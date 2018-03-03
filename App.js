import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";
import Home from "./components/Home";
import Login from "./components/Login";

export default class App extends Component {
  state = {
    showHome: false
  };

  navegar = () => {
    this.setState({
      showHome: true
    });
  };
  regresar = () => {
    this.setState({
      showHome: false
    });
  };

  render() {
    const { showHome } = this.state;
    if (showHome == true) {
      return <Home regresar={this.regresar} />;
    } else {
      return <Login navegar={this.navegar} />;
    }
  }
}
