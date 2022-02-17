import React, { useEffect, useState } from 'react';
import { BackHandler, StatusBar, StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize'
import {useNavigation} from '@react-navigation/native'
import {Ionicons} from '@expo/vector-icons'
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';
import {
  CarsList,
  Container,
  Header,
  HeaderContent,
  MyCarButton,
  TotalCars
} from './styles';
import {api} from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { Load } from '../../components/Load';
import { useTheme } from 'styled-components';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { PanGestureHandler, RectButton } from 'react-native-gesture-handler';
import theme from '../../styles/theme';
import { LoadAnimation } from '../../components/LoadAnimation';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton) 

export function Home(){
  const [cars, setCars] = useState<CarDTO>([])

  const positionX = useSharedValue(0)
  const positionY = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return{
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value},
      ]
    }
  })

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(_, ctx: any){
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any){
      positionX.value = ctx.positionX;
      positionY.value = ctx.positionY + event.translationY;
    },
    onEnd(){
 
    }
  })

  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  function handleCarDetails(car: CarDTO){
    navigation.navigate('CarDetails', {car})
  }
  function handleOpenMyCars(){
    navigation.navigate('MyCars')
  }
  useEffect(() => {
    async function fechCars() {
      try {
        const response = await api.get('/cars')    
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fechCars() 
  },[])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true
    })
  },[])
 
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />
          { 
            !loading &&
            <TotalCars>
              Total de {cars.length} carros
            </TotalCars>
          }
        </HeaderContent>
      </Header>
      { loading ? <LoadAnimation />  : 
        <CarsList 
          data={cars}
          keyExtractor={item=> item.id}
          renderItem={({item})=> 
            <Car data={item} onPress={() => handleCarDetails(item)} />  
          }
        />
      }
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22,
            },
          ]}
        >
          <ButtonAnimated onPress={handleOpenMyCars} style={styles.button} >
    
            <Ionicons
              name="ios-car-sport"
              size={32}
              color={theme.colors.shape}
            /> 
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
      
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main
  }
})