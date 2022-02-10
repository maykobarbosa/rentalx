import React from 'react';
import {useNavigation, useRoute } from '@react-navigation/native'

import Animated, { Extrapolate, interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

import{About, Accessories, Brand, CarImages,Container, Content, Description, Details, Footer, Header, Name, Period, Price, Rent, } from './styles';
import { Button } from '../../components/Button';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { StatusBar, StyleSheet } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { CarDTO } from '../../dtos/CarDTO';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';


interface Params {
  car: CarDTO;
}

export function CarDetails(){
  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const {car } = route.params as Params

  const scrollY = useSharedValue(0)
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrollY.value = event.contentOffset.y
  })

  const headerStyleAnimation = useAnimatedStyle(() => {
    return{
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      )
    }
  })

  const sliderCarStyleAnimation =useAnimatedStyle(() => {
    return{
      opacity: interpolate(
        scrollY.value,
        [0, 150],
        [1, 0],
        Extrapolate.CLAMP
      )
    }
  })


  function handleScheduling(){
    navigation.navigate('Scheduling', {car})
  }

  return (
    <Container>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Animated.View
        style={[
          headerStyleAnimation, 
          styles.header,
          {backgroundColor: theme.colors.background_secundary}
        ]}
      >
        <Header>
          <BackButton  />
        </Header>

        <Animated.View 
          style={[sliderCarStyleAnimation]}
        >
          <CarImages>
            <ImageSlider imageUrl={car.photos} />
          </CarImages>          
        </Animated.View>      

      </Animated.View>
      
      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: getStatusBarHeight() + 160
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
         
        </Details>
        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type} 
                name={accessory.name} 
                icon={getAccessoryIcon(accessory.type)} 
              />
            ))            
          }
        </Accessories>
        
        <About>{car.about}</About>
        <About>{car.about}</About><About>{car.about}</About>
    
      </Animated.ScrollView>   
      <Footer>
        <Button title="Escolher período do aluguel" onPress={handleScheduling} />  
      </Footer>  

    </Container>
  );
}


const styles = StyleSheet.create({
  header: { 
    position: 'absolute',
    overflow: 'hidden',
    zIndex: 1,
  },
})
