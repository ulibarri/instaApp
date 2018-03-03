import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.loginTitle}>
        <Text style={{ color: "#333" }}>Login</Text>
        <View>
          <Text>Usuario</Text>
          <TextInput style={styles.textInput} />

          <Text>Contraseña</Text>
          <TextInput style={styles.textInput} />
          <Button title="Entrar" onPress={this.props.navegar} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginTitle: {
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
    flex: 1
  },
  textInput: {
    backgroundColor: "gray"
  }
});

export default Login;
