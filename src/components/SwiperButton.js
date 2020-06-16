import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, onPress} from 'react-native';

const SwiperButton = props => {
  return (
    <TouchableOpacity>
      <View style={styles.ButtonStyle}>
        <Text style={styles.TextStyle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    borderRadius: 50, // Rounded border
    borderWidth: 2, // 2 point border widht
    borderColor: '#fff', // White colored border
    paddingHorizontal: 50, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    backgroundColor: '#63a995',
    paddingTop: 15,
    paddingBottom: 15,
  },
  TextStyle: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default SwiperButton;
