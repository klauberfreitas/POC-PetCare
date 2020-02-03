import React from 'react';

import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
  } from 'react-native';
  

import Icon from 'react-native-vector-icons/MaterialIcons';

class Tab extends React.Component {
    render = () => {
    return (
        <View>
            <Icon name="person-add" size={24} color="#000" />
            <Text>Indicar amigos</Text>
        </View>
    );
}
}

export default Tab;


