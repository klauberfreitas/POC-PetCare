import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

class WorldMap extends React.Component {
  static navigationOptions = {
    title: "Map"
  };
  render() {
    return (
      <View>
        <ImageBackground
          source={require("../assets/images/map.png")}
          style={{ width: "100%", height: "100%" }}>
          <TouchableOpacity
            style={[styles.customBtn, styles.blue]}
            onPress={() => this.props.navigation.navigate("Settings")}>
            <Icon name="heart" style={styles.icons} />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.customBtn2, styles.red]}>
            <Icon name="plus" style={styles.icons} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icons: {
    fontSize: 32,
    color: "#fff",
    left: 15,
    bottom: 0,
    right: 0,
    top: 15,
    position: "absolute"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  customBtn: {
    borderRadius: 50,
    width: 60,
    height: 60,
    left: '10%',
    top: '20%',
  },
  customBtn2: {
    borderRadius: 50,
    width: 60,
    height: 60,
    left: '50%',
    top: '5%',
  },
  container: {
    flex: 2,
    flexDirection: "row"
  },
  red: {
    backgroundColor: "#ec3c3d"
  },
  blue: {
    backgroundColor: "#54a1e6"
  },
  green: {
    backgroundColor: "#49bd78"
  },
  yellow: {
    backgroundColor: "#f7aa34"
  },
  purple: {
    backgroundColor: "#7d48b0"
  }
});

export { WorldMap };
