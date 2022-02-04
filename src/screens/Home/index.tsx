import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
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

export function Home(){
  const theme = useTheme()
  const [cars, setCars] = useState<CarDTO>([])
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
          <TotalCars>
            Total de {cars.length} carros
          </TotalCars>
        </HeaderContent>
      </Header>
      { loading ? <Load />  : 
        <CarsList 
          data={cars}
          keyExtractor={item=> item.id}
          renderItem={({item})=> 
            <Car data={item} onPress={() => handleCarDetails(item)} />  
          }
        />
      }
      <MyCarButton onPress={handleOpenMyCars} >
        <Ionicons
          name="ios-car-sport"
          size={32}
          color={theme.colors.shape}
        /> 
      </MyCarButton>
      
      
    </Container>
  );
}