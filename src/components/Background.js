import React, { Component } from "react";
import { Button, ImageBackground } from "react-native";

class BackgroundImage extends Component {
  render() {
    <ImageBackground
    source={require('../assets/images/background.png')}
      imageStyle={{ resizeMode: "stretch" }} >

    </ImageBackground>;
  }
}

export default BackgroundImage;
