/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  StyleSheet, Text, View
} from 'react-native';

import Profile from './src/Profile'

import {RecoilRoot, useRecoilValue} from "recoil"
import {dataAtom} from "./src/atom"
/**
 * 포스팅
 * 
 * https://samslow.github.io/development/2020/09/02/reactnativeTesting/
 * 
 * @returns 
 */

const App = () => {
  
  
  return (
    <RecoilRoot>
      <View style={styles.container}>
        <Profile userName={"tester"} name={"hslee"} />
      </View>
    </RecoilRoot>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

