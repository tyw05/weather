/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {getWeather} from './lib/api';
import {StyleSheet} from 'react-native';
import {DropdownComponent, WeatherBox} from './components';
import {coordinate} from './lib/data';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  const [weather, setWeather] = React.useState<any>();
  // const [latitude, setLatitude] = React.useState('');
  // const [longitude, setLongitude] = React.useState('');

  const [dropdownValue, setDropdownValue] = React.useState('Hong Kong');

  useEffect(() => {
    async function fetchData() {
      console.log('fetching');
      const target = coordinate.find(item => item.place === dropdownValue);
      if (target) {
        const data = await getWeather(target.coordinate);
        setWeather(data);
      }
    }
    fetchData();
  }, [dropdownValue]);

  function handleChange() {
    // setWeatherParams({latitude: latitude, longitude: longitude});
  }

  if (!weather) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient
      colors={['#00d4ff', '#097968', '#00d4ff']}
      style={styles.container}>
      <View style={styles.subContainer}>
        <View style={{flex: 3}}>
          <WeatherBox
            info={`${weather.current.temperature_2m} ${weather.current_units.temperature_2m}`}
            infoType="temperature"
            timezone={weather.timezone}
          />
        </View>
        <View style={styles.subLargerContainer}>
          <WeatherBox
            info={`${weather.current.relative_humidity_2m} ${weather.current_units.relative_humidity_2m}`}
            infoType="humidity"
          />
          <WeatherBox
            info={`${weather.current.wind_speed_10m} ${weather.current_units.wind_speed_10m}`}
            infoType="wind"
          />
        </View>
      </View>
      <View style={[styles.subContainer]}>
        <View style={{backgroundColor: 'white', borderRadius: 8}}>
          <DropdownComponent
            value={dropdownValue}
            setValue={setDropdownValue}
          />
        </View>
        {/* <View style={styles.input}>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{width: 68, marginRight: 10}}>Latitude</Text>
            <TextInput
              style={styles.textInput}
              value={latitude}
              onChangeText={setLatitude}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{width: 68, marginRight: 10}}>Longtitude</Text>
            <TextInput
              style={styles.textInput}
              value={longitude}
              onChangeText={setLongitude}
            />
          </View>

          <Pressable style={styles.button} onPress={() => handleChange()}>
            <Text style={{color: 'white', fontWeight: '500'}}>Change</Text>
          </Pressable>
        </View> */}
      </View>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  subContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 50,
    paddingHorizontal: 16,
  },
  subLargerContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    width: 'auto',
    height: 'auto',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    width: '100%',
    height: '100%',
    rowGap: 10,
    marginTop: 20,
  },
  button: {
    display: 'flex',
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: 300,
    borderWidth: 2,
    borderColor: 'red',
  },
});
