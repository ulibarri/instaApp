// import React, { Component } from "react";
// import { StyleSheet, TextInput, Text, Button, View } from "react-native";

// class Home extends Component {
//   render() {
//     return (
//       <View style={styles.loginTitle}>
//         <Text>Bienvenido</Text>
//         <Button title="Regresar" onPress={this.props.regresar} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   loginTitle: {
//     paddingTop: 20,
//     alignItems: "center",
//     width: "100%",
//     flex: 1
//   },
//   textInput: {
//     backgroundColor: "gray"
//   }
// });
// export default Home;
import React from "react";
import { TouchableOpacity, RefreshControl } from "react-native";
import {
  Content,
  Header,
  Container,
  Body,
  Text,
  Icon,
  Right,
  Left
} from "native-base";
import ImageCard from "../ImageCard";
import Api from "../../utils/api";

class Home extends React.Component {
  state = {
    posts: [],
    refreshing: false
  };

  componentDidMount() {
    this._onRefresh();
  }

  _onRefresh() {
    this.setState({ refreshing: true });
    Api.get("/posts")
      .then(data => data.json())
      .then(data => {
        if (Array.isArray(data)) {
          this.setState({
            posts: data
          });
        }
        this.setState({ refreshing: false });
      });
  }

  removePost = id => {
    this.setState({
      posts: this.state.posts.filter(post => post.id != id)
    });
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="ios-menu" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("CreatePost")}
            >
              <Icon name="ios-send-outline" />
            </TouchableOpacity>
          </Right>
        </Header>
        <Content
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
        >
          {this.state.posts.map((item, index) => (
            <ImageCard
              key={index}
              data={item}
              removePost={this.removePost}
              navigation={this.props.navigation}
            />
          ))}
        </Content>
      </Container>
    );
  }
}

export default Home;
