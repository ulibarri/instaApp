// import React, { Component } from "react";
// import {
//   StyleSheet,
//   TextInput,
//   Text,
//   Button,
//   View,
//   ImageBackground
// } from "react-native";

// class Login extends Component {
//   render() {
//     return (
//       <View style={styles.body}>
//         {/* <Image source ={} /> */}
//         <Text style={{ color: "#333" }}>Login</Text>
//         <View style={{ color: "purple" }}>
//           <Text>Usuario</Text>
//           <TextInput style={styles.textInput} placeholder="Usuario" />

//           <Text>Contraseña</Text>
//           <TextInput style={styles.textInput} placeholder="Password" />
//           <Button
//             title="Entrar"
//             onPress={() => this.props.navigation.navigate("Home")}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   body: {
//     flex: 1
//   },
//   loginform: {
//     padding: 10,
//     paddingTop: 20
//   },
//   textInput: {
//     backgroundColor: "#FAFAFA",
//     padding: 14,
//     borderWidth: 1,
//     borderColor: "#FEFEFE",
//     marginBottom: 10,
//     borderRadius: 7
//   }
// });

// export default Login;
import React from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    showSpinner: false
  };

  login = () => {
    // const { username, password } = this.state;
    const useraccount = {
      auth: {
        email: "noel@michelada.io",
        password: "12345678"
      }
    };

    this.setState({ showSpinner: true });
    this.props.screenProps
      .login(useraccount)
      .then(() => {
        this.setState({ showSpinner: false });
      })
      .catch(() => {
        this.setState({ showSpinner: false }, () => {
          setTimeout(() => {
            Alert.alert("Usuario o password invalido");
          }, 0);
        });
      });
  };

  render() {
    return (
      <View style={styles.body}>
        <ImageBackground
          style={styles.titleBackground}
          source={require("../../assets/background.jpeg")}
        >
          <Text style={styles.title}>InstagramApp</Text>
        </ImageBackground>
        <View style={styles.loginForm}>
          <TextInput
            style={[styles.textInput, { marginBottom: 10 }]}
            placeholder="Correo eléctronico"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => this.setState({ email: text })}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Confirma tu contraseña"
            secureTextEntry={true}
            onChangeText={text => this.setState({ password: text })}
          />
          <View style={styles.loginButtonWrapper}>
            <Button title="Iniciar sesión" onPress={this.login} />
          </View>
          <View style={styles.forgotLabel}>
            <Text style={{ color: "gray", marginRight: 5 }}>
              No tienes cuenta?
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={{ color: "#2F9BEF" }}>Obten una aquí</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Spinner
          visible={this.state.showSpinner}
          textContent="Cargando..."
          textStyle={{ color: "#FFF" }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "white",
    flex: 1
  },
  titleBackground: {
    width: "100%",
    height: 180,
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30
  },
  loginForm: {
    padding: 10,
    paddingTop: 20
  },
  textInput: {
    backgroundColor: "#FAFAFA",
    padding: 14,
    borderColor: "#ebebeb",
    borderWidth: 1,
    borderRadius: 7
  },
  loginButtonWrapper: {
    marginTop: 10,
    marginBottom: 15
  },
  forgotLabel: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default Login;
