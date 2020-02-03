import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Image,
  TouchableHighlight
} from "react-native";

import * as Font from "expo-font";



export default class Feed extends React.Component {
  /*   constructor() {
    super();
    this.state = { showME: true };
  } */
  static navigationOptions = {
    title: "Feed"
  };

  /*  componentWillMount() {
    setTimeout(() => {
      this.setState({
        showME: false
      });
    }, 1000);
  } */
  //  {this.state.showME ? (         <ActivityIndicator size="large" /> ) : (
  render() {
    return (
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={{ flex: 1, height: null, width: null, resizeMode: "cover" }}
      >


       <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.imageContainer}
          >
            <TouchableHighlight>
              <Image
                source={require("../assets/images/icon.png")}
                style={styles.image}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Image
                source={require("../assets/images/icon.png")}
                style={styles.image}
              />
            </TouchableHighlight>
            <TouchableHighlight>
              <Image
                source={require("../assets/images/icon.png")}
                style={styles.image}
              />
            </TouchableHighlight>
          </ScrollView>


        <View style={styles.header}>  
          <Text style={styles.customBtnPreText}>Olá NomeUsuário</Text>
          <Text style={styles.customBtnText}>
            Esse é o seu {"\n"}painel de hoje
          </Text>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentInsetAdjustmentBehavior="automatic"
          >
            <View style={[styles.card, styles.red]}>
              <Text style={styles.customBtnPreText}>Hoje às 14:30h</Text>
              <Text style={styles.customBtnText}>Visita ao veterinário</Text>
            </View>

            <View style={[styles.card, styles.blue]}>
              <Text style={styles.customBtnPreText}>Hoje às 14:30h</Text>
              <Text style={styles.customBtnText}>Visita ao veterinário</Text>
            </View>

            <View style={[styles.card, styles.yellow]}>
              <Text style={styles.customBtnPreText}>Hoje às 14:30h</Text>
              <Text style={styles.customBtnText}>Visita ao veterinário</Text>
            </View>
          </ScrollView>
    
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 80,
    backgroundColor: "#4666E5"
  },

  card: {
    color: "#fff",
    flex: 1,
    alignSelf: "center",
    width: 300,
    height: 250,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 60,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    margin: 15
  },

  customBtnPreText: {

    paddingTop: 40,
    paddingHorizontal: 50,
    fontSize: 16,
    fontWeight: "400",
    color: "rgba(255,255,255,0.4)"
  },
  customBtnText: {

    fontWeight: "bold",
    paddingHorizontal: 50,
    fontSize: 22,
    color: "#fff",
    paddingBottom: 20
  },
  red: {
    backgroundColor: "#ec3c3d"
  },
  blue: {
    backgroundColor: "#4666E5"
  },
  green: {
    backgroundColor: "#49bd78"
  },
  yellow: {
    backgroundColor: "#f7aa34"
  },
  purple: {
    backgroundColor: "#7d48b0"
  },
  image: {
    width: 50,
    height: 50,
    overflow: "hidden",
    position: "absolute"
  },
  imageContainer: {
    top: 100,
    left: 250,
    position: "absolute"
  }
});
