/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const [rollResult, setRollResult] = useState(null);

  const onPressRollResult = () => {
    setRollResult(Math.floor(Math.random() * 20) + 1);
  };

  const onPressClear = () => {
    setRollResult(null);
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="Roll Dice" onPress={onPressRollResult} enabled />
        {rollResult != null ? (
          <View>
            <ImageBackground
              source={require('./img/d20_blank.png')}
              style={styles.image}
              resizeMode={'cover'}>
              <View>
                <Text style={styles.text}>{rollResult}</Text>
              </View>
            </ImageBackground>
            <Button title="Clear" onPress={onPressClear} enabled />
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
    alignContent: 'center',
    height: 300,
    width: 300,
  },
  text: {
    color: 'black',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
