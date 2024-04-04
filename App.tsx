import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {getWeather} from './lib/api';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const App = () => {
  const [weather, setWeather] = React.useState<any>();

  useEffect(() => {
    async function fetchData() {
      const data = await getWeather();
      setWeather(data);
    }
    fetchData();
  }, []);

  if (!weather) {
    return <Text>Loading...</Text>;
  } else {
    console.log('loaded', weather);
  }

  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: 'black',
          width: 'auto',
          height: 'auto',
          color: 'white',
        }}>
        <Icon name="weather-cloudy" size={30} color={'#900'}>
          {weather.current.temperature_2m}{' '}
          {weather.current_units.temperature_2m}
        </Icon>
      </Text>
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
});
