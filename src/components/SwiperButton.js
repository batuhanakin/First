import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const SwiperButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.ButtonStyle}>
        <Text style={styles.TextStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 17, // Rounded border
    backgroundColor: '#63a995',
    paddingTop: 10,
    paddingBottom: 15,
    marginLeft: 100,
    marginTop: 35,
    width: 230,
  },
  TextStyle: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SwiperButton;
