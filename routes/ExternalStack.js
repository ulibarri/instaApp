// import { StackNavigator } from "react-navigation";
// import Login from "../components/Login";
// import Home from "../components/Home";

// const ExternalStack = StackNavigator(
//   {
//     Login: {
//       //este es el nombre de la ruta
//       screen: Login //este es el nombre del componente
//     }
//     //routes
//   },
//   {
//     Home: {
//       screen: Home
//     }
//     //props
//   }
// );
// export default ExternalStack;

import { StackNavigator } from "react-navigation";
import Login from "../components/Login";

const ExternalStack = StackNavigator(
  {
    Login: {
      screen: Login
    }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

export default ExternalStack;
