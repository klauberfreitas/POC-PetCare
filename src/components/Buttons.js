import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleButtons } from '.././styles/index';


export default function Buttons() {
  return (
  /*   <ScrollView
      horizontal
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
    > */
      <View style={StyleButtons.container}>
        <TouchableOpacity
          style={[StyleButtons.customBtn, StyleButtons.green]}
          onPress={() => this.props.navigation.navigate("Settings")}   >     
          <Text style={StyleButtons.customBtnPreText}>Novo</Text> 
          <Text style={StyleButtons.customBtnText}>Pet</Text>
          <FontAwesome5 name="paw" style={StyleButtons.icons} />
        </TouchableOpacity>

        <TouchableOpacity  style={[StyleButtons.customBtn, StyleButtons.purple]}>
          <Text style={StyleButtons.customBtnPreText}>Marcar</Text>
          <Text style={StyleButtons.customBtnText}>Vacinas</Text>
          <FontAwesome5 name="clinic-medical" style={StyleButtons.icons} />
        </TouchableOpacity>

   
        <TouchableOpacity style={[StyleButtons.customBtn, StyleButtons.red]}>
          <Text style={StyleButtons.customBtnPreText}>Dicas e</Text>
          <Text style={StyleButtons.customBtnText}>Ajuda</Text>
          <FontAwesome5 name="info-circle" style={StyleButtons.icons} />
        </TouchableOpacity>

      </View>
   // </ScrollView>
  );
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}
