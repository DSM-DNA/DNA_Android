import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import NavController from './components/NavController';
import Loading from './screens/Loading';

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(null);
  const preLoad = async () => {
    try{
      const IsLoggedIn = await AsyncStorage.getItem("isLoggedIn")
      if(!isLoggedIn || isLoggedIn === "false"){
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        setIsLoaded(true);
      } 
    } catch(e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preLoad();
  }, []);
  return isLoaded && IsLoggedIn !== null ? (
    <NavController />
  ) : (
    <Loading />
  )
};
