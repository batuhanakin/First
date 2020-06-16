import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
} from 'react-native';

import SwiperButton from '../components/SwiperButton';
const datas = require('../data.json');

const Device_Width = Dimensions.get('window').width;

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}>
          {datas.map(data => (
            <View style={styles.BlockStyle}>
              <Image
                style={styles.ImageStyle}
                source={{
                  uri: data.image,
                }}
              />
              <Text style={styles.TextStyle}> {data.title}</Text>
              <Text style={styles.TextDescStyle}> {data.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <SwiperButton title="Next" />
    </SafeAreaView>
  );
};
const next = () => {};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BlockStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: Device_Width,
  },
  TextStyle: {
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextDescStyle: {},
  ImageStyle: {
    width: 300,
    height: 200,
  },
});

export default App;
