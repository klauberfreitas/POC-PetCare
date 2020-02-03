import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

class Profile extends React.Component {
  static navigationOptions = {
    header: null,
    navigationOptions: {
      headerVisible: false
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}></View>
        <Image
          style={styles.avatar}
          source={require("../assets/images/icon.png")}/>
        <View style={styles.body}>
          <View style={styles.bodyContent2}>
            <Text style={styles.name}>Ana Clara</Text>
            <Text style={styles.info}>5 pets</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
              electram expetendis, omittam deseruisse consequuntur ius an,
            </Text>
          </View>
          <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer}>
              <Text>Um botão atoa</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE9E4"
  },
  header: {
    backgroundColor: "#FF7E7E",
    height: 150
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90
  },
  name: {
    fontFamily: "Chocolate",
    paddingTop: 15,
    paddingHorizontal: 15,
    fontSize: 36,
    color: "#484848"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    color: "#fff",
  },
  bodyContent2: {
    alignItems: "center",
    padding: 15
  },
  info: {
    fontFamily: "Quicksand",
    fontSize: 16,
    color: "#FF7E7E",
    marginTop: 10
  },
  description: {
    fontSize: 16,
    color: "#696969",
    marginTop: 10,
    textAlign: "center"
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#FF7E7E"
  }
});

export { Profile };
