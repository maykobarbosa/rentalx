import React from 'react';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import { Home } from './src/screens/Home';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { ActivityIndicator } from 'react-native';
import { CarDetails } from './src/components/CarDetails';
import { Scheduling } from './src/screens/Scheduling';
import { SchedulingDetails } from './src/components/SchedulingDetails';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
  })

  if(!fontsLoaded){
    return (
      <ActivityIndicator 
        color={theme.colors.main} 
        size='large'
      />
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <SchedulingDetails />
    </ThemeProvider>
  );
}
