import React, { Component } from "react";
import { StyleSheet, TextInput, Text, Button, View } from "react-native";

class Home extends Component {
  render() {
    return (
      <View style={styles.loginTitle}>
        <Text>Bienvenido</Text>
        <Button title="Regresar" onPress={this.props.regresar} />
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
export default Home;
