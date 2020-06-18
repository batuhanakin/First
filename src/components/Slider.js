import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import SwiperButton from './SwiperButton';
const datas = require('../data.json');

const Device_Width = Dimensions.get('window').width;

const Slider = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          this.obj.scrollTo({x: 1656, y: 0, animated: true});
        }}
        style={styles.TouchableOpacity}>
        <Text style={styles.SkipStyle}>Skip Introduction</Text>
      </TouchableOpacity>
      <View>
        <ScrollView
          ref={obj => (this.obj = obj)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          scrollEventThrottle={16}
          onScroll={event => {
            setCount(event.nativeEvent.contentOffset.x / Device_Width);
          }}>
          {datas.map(data => (
            <View style={styles.BlockStyle}>
              <Image
                style={styles.ImageStyle}
                source={{
                  uri: data.image,
                }}
              />
              {/* <View>{replacer(data.title)}</View> */}

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  paddingTop: 7,
                  paddingBottom: 15,
                  // width: Device_Width,
                }}>
                {data.title.split(' ').map(word => {
                  const match = word.match(/\*\*(.*)\*\*/);
                  if (match) {
                    return (
                      <Text style={styles.TextBoldStyle}>{match[1]} </Text>
                    );
                  } else {
                    return <Text style={styles.TextStyle}>{word} </Text>;
                  }
                })}
              </View>
              <Text style={styles.TextDescStyle}> {data.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.dots}>
        {datas.map((key, index) =>
          index == count ? (
            <View style={styles.ActiveDot} animated />
          ) : (
            <View style={styles.dot} />
          ),
        )}
      </View>
      {count == datas.length - 1 ? (
        <SwiperButton
          style={styles.ButtonStyle}
          count
          title="Start"
          onPress={async () => {
            try {
              await AsyncStorage.setItem(
                'first-user-screen-shown',
                JSON.stringify(true),
              );
            } catch (error) {
              alert('hata');
              // Error saving data
            }
          }}
        />
      ) : (
        <SwiperButton
          style={styles.ButtonStyle}
          count
          title="Next"
          onPress={() => {
            this.obj.scrollTo({
              x: (count + 1) * Device_Width,
              y: 0,
              animated: true,
            });
          }}
        />
      )}
    </SafeAreaView>
  );
};
const replacer = data => {
  data.replace(/\*\*(\S+)\*\*/g, (matched, index) => {
    console.log(index);
    let text = <Text style={styles.TextStyle}>{index[1]}</Text>;
    return text;
  });
};
const styles = StyleSheet.create({
  BlockStyle: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: Device_Width,
  },
  TextStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  TextBoldStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  TextDescStyle: {
    fontSize: 15,
  },
  ImageStyle: {
    marginBottom: 25,
    width: 350,
    height: 250,
  },
  dot: {
    backgroundColor: 'rgba(213, 240, 232, 0.8)',
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  ActiveDot: {
    backgroundColor: '#63a995',
    width: 13,
    height: 13,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SkipStyle: {
    color: '#63a995',
    textAlign: 'center',
  },
  TouchableOpacity: {
    position: 'absolute',
    right: 10,
    top: 50,
    zIndex: 1,
  },
});

export default Slider;
