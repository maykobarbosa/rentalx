import React from 'react';
import loadingCar from '../../assets/load_animation.json'
import LottieView from 'lottie-react-native'
import {
  Container
} from './styles';

export function LoadAnimation(){
  return (
    <Container>
      <LottieView
        source={loadingCar}
        style={{height: 200}}
        resizeMode="contain"
        autoPlay
        loop
      />
    </Container>
  );
}