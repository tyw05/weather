/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {getWeather} from './lib/api';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [weather, setWeather] = React.useState<any>();
  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [weatherParams, setWeatherParams] = React.useState({
    latitude: '37.7749',
    longitude: '122.4194',
  });

  useEffect(() => {
    async function fetchData() {
      console.log('fetching');
      const data = await getWeather(weatherParams);
      setWeather(data);
    }
    fetchData();
  }, [weatherParams]);

  function handleChange() {
    setWeatherParams({latitude: latitude, longitude: longitude});
  }

  if (!weather) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Icon name="weather-cloudy" size={30} color={'black'}>
          {weather.current.temperature_2m}
          {weather.current_units.temperature_2m}
        </Icon>
      </Text>
      <Text style={[styles.text, {fontSize: 28}]}>{weather.timezone}</Text>
      <View style={styles.input}>
        <Text>Latitude</Text>
        <TextInput
          style={styles.textInput}
          value={latitude}
          onChangeText={setLatitude}
        />
        <Text>Longtitude</Text>
        <TextInput
          style={styles.textInput}
          value={longitude}
          onChangeText={setLongitude}
        />
        <Pressable style={styles.button} onPress={() => handleChange()}>
          <Text style={{color: 'white', fontWeight: '500'}}>Change</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  text: {
    backgroundColor: 'white',
    width: 'auto',
    height: 'auto',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    // display: 'flex',
    width: 200,
    height: 90,
    rowGap: 10,
    marginTop: 20,
    // flexDirection: 'column',
    // borderWidth: 2,
  },
  button: {
    display: 'flex',
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 2,
    borderColor: 'red',
  },
});
