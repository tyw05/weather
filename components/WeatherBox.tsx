import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import LottieView from 'lottie-react-native';

interface WeatherBoxProps {
  info: string;
  infoType: 'temperature' | 'wind' | 'humidity';
  timezone?: string;
}

export const WeatherBox = ({info, infoType, timezone}: WeatherBoxProps) => {
  function checkIcon(infoType: string) {
    switch (infoType) {
      case 'temperature':
        return (
          <>
            <LottieView
              source={require('../assets/sunny.json')}
              style={{width: 100, height: 100}}
              autoPlay
              loop
            />
            <Text style={styles.text}>{info}</Text>
          </>
        );
      case 'humidity':
        return (
          <Icon name="water-outline" size={30} color={'black'}>
            {info}
          </Icon>
        );
      case 'wind':
        return (
          <Icon name="weather-windy" size={30} color={'black'}>
            {info}
          </Icon>
        );
      default:
        return (
          <Icon name="weather-cloudy" size={30} color={'black'}>
            {info}
          </Icon>
        );
    }
  }

  return (
    <View style={styles.container}>
      {checkIcon(infoType)}
      {timezone && <Text style={styles.text}>{timezone}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});
