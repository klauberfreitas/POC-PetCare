import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

import appStyles from "../styles/Style";
import COLORS from "../styles/Theme";
import LAYOUT from "../styles/Layout";

class Home extends React.Component {
  render() {
    return (
      <View style={appStyles.container}>
        <View style={styles.row}>
          <View style={[styles.box]}>
            <Text style={styles.WelcomeMessage}>Aproveite seu dia,</Text>
            <Text style={styles.NameMessage}>Ana Clara!</Text>
          </View>
        </View>

        <ScrollView
          style={styles.rowAvatar}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarMenu}
              source={require("../assets/images/dadau.png")}
            />
            <Text style={styles.petName}>Dadau</Text>
          </View>
          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarMenu}
              source={require("../assets/images/amora.png")}
            />
            <Text style={styles.petName}>Amora</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarMenu}
              source={require("../assets/images/eddga.png")}
            />
            <Text style={styles.petName}>Eddga</Text>
          </View>

          <View style={styles.avatarContainer}>
            <Image
              style={styles.avatarMenu}
              source={require("../assets/images/deviruch.png")}
            />
            <Text style={styles.petName}>Deviruch</Text>
          </View>
        </ScrollView>

        <Text style={styles.Topic}>Lembretes</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={[styles.card, styles.pink]}>
            <Text style={styles.preTextCard}>Hoje às 14:30h</Text>
            <Text style={styles.textCard}>Visita ao veterinário</Text>
            <TouchableOpacity style={styles.cardDetail}>
              <Text style={styles.cardDetailText}>Detalhes</Text>
            </TouchableOpacity>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/VET.png")}
            />
            <Image />
          </View>

          <View style={[styles.card, styles.orange]}>
            <Text style={styles.preTextCard}>Hoje às 14:30h</Text>
            <Text style={styles.textCard}>Visita ao veterinário</Text>
            <TouchableOpacity style={styles.cardDetail}>
              <Text style={styles.cardDetailText}>Detalhes</Text>
            </TouchableOpacity>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/VET.png")}
            />
            <Image />
          </View>

          <View style={[styles.card, styles.blue]}>
            <Text style={styles.preTextCard}>Hoje às 14:30h</Text>
            <Text style={styles.textCard}>Visita ao veterinário</Text>
            <TouchableOpacity style={styles.cardDetail}>
              <Text style={styles.cardDetailText}>Detalhes</Text>
            </TouchableOpacity>
            <Image
              style={styles.cardImage}
              source={require("../assets/images/VET.png")}
            />
            <Image />
          </View>
        </ScrollView>

        <Text style={styles.Topic}>Atividades</Text>

        <View style={styles.row}>
          <TouchableOpacity>
            <Text style={styles.textButton}>Eventos</Text>
            <Image
              style={styles.baseButton}
              source={require("../assets/images/eventos.png")}
            />
            <Image />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textButton}>Passeio</Text>
            <Image
              style={styles.baseButton}
              source={require("../assets/images/passeio.png")}
            />
            <Image />
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.textButton}>Ajuda</Text>
            <Image
              style={styles.baseButton}
              source={require("../assets/images/ajuda.png")}
            />
            <Image />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { Home };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE9E4",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  

  },
  avatarContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  rowAvatar: {
    marginTop: hp("3%")
  },
  petName: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: hp("2%"),
    color: "#737373"
  },
  box: {
    flex: 3,
    height: 100
  },
  box2: {
    flex: 1
  },
  WelcomeMessage: {
    fontFamily: "Quicksand-Bold",
    paddingTop: 40,
    paddingHorizontal: 15,
    fontSize: hp("4%"),
    color: "#484848"
  },
  NameMessage: {
    fontFamily: "Chocolate",
    paddingHorizontal: 15,
    fontSize: hp("6%"),
    color: "#FF7E7E"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderWidth: 2,
    borderColor: "white",
    marginBottom: 10,
    marginTop: 45,
    zIndex: 5
  },
  avatarMenu: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    borderWidth: 2,
    borderColor: "#FFCEA6",
    marginLeft: wp(LAYOUT.spaceLeft),

  },
  Topic: {
    fontFamily: "Quicksand-Bold",
    paddingHorizontal: 30,
    marginTop: hp("2%"),
    fontSize: hp("4%"),
    color: "#484848"
  },
  card: {
    height: hp("25%"),
    width: wp("90%"),
    marginLeft: wp(LAYOUT.spaceLeft),
    borderRadius: hp(LAYOUT.borderRound)
  },
  preTextCard: {
    fontFamily: "Quicksand",
    paddingTop: hp("2%"),
    paddingLeft: wp(LAYOUT.paddingLeft),
    fontSize: hp("3%"),
    color: "rgba(255,255,255,0.7)"
  },
  textCard: {
    fontFamily: "Quicksand-Bold",
    paddingLeft: wp(LAYOUT.paddingLeft),
    fontSize: hp("4%"),
    paddingTop: hp("1%"),
    lineHeight: 25,
    color: "#fff",
    width: "66%",
    transform: [{ translate: [0, 0, 1] }]
  },
  cardDetail: {
    marginHorizontal: wp(LAYOUT.paddingLeft),
    marginTop: hp("1%"),
    width: wp("25%"),
    height: hp("5%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp(LAYOUT.borderRound),
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  cardDetailText: {
    fontFamily: "Quicksand-Bold",
    fontSize: 14,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 2
    //transform: [     { translateY: 50 }, ],
  },
  cardImage: {
    height: hp("25%"),
    width: wp("35%"),
    position: "absolute",
    alignSelf: "flex-end"
  },
  baseButton: {
    height: hp("20%"),
    width: wp("28%"),
    marginHorizontal: wp("3%"),

    borderRadius: hp(LAYOUT.borderRound)
  },
  textButton: {
    fontFamily: "Quicksand-Bold",
    paddingLeft: wp(LAYOUT.paddingLeft),
    fontSize: 16,
    color: "#fff",
    top: 85,
    transform: [{ translate: [0, 0, 1] }],
    position: "absolute"
  },
  primary: {
    backgroundColor: COLORS.PRIMARY
  },
  red: {
    backgroundColor: COLORS.RED
  },
  pink: {
    backgroundColor: COLORS.PINK
  },
  blue: {
    backgroundColor: COLORS.BLUE
  },
  green: {
    backgroundColor: COLORS.GREEN
  },
  yellow: {
    backgroundColor: COLORS.YELLOW
  },
  orange: {
    backgroundColor: COLORS.YELLOW
  },
  purple: {
    backgroundColor: COLORS.PURPLE
  }
});
