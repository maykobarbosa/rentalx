import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { CarDTO } from '../../dtos/CarDTO';
import { api } from '../../services/api';
import {AntDesign} from '@expo/vector-icons'

import {
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
  CarFooter,
  CarFooterDate,
  CarFooterPeriod,
  CarFooterTitle,
  CarsList,
  CarWrapper,
  Container, Content, Header, SubTitle, Title,
} from './styles';
import { useTheme } from 'styled-components';
import { Load } from '../../components/Load';
import { Car } from '../../components/Car';
import { RFValue } from 'react-native-responsive-fontsize';

interface CarProps{
  id: string;
  user_id: string;
  car: CarDTO;
  start: string;
  end: string;

}

export function MyCars(){
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const theme = useTheme()


  useEffect(() => {
    async function fetchCars(){
      try {
        const response = await api.get('schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error) {
        console.log(error)
      } finally{
        setLoading(false)
      }
    }
    fetchCars()
  })
  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton 
          onPress={() => {}} 
          color={theme.colors.shape}
        />

        <Title>
        Seus agendamentos,{'\n'}
        estão aqui. 
        </Title>
        <SubTitle>
          Conforto segurança e praticidade
        </SubTitle>
      </Header>
      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos </AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
        { loading ? <Load />  : 
        <FlatList 
          data={cars}
          keyExtractor={item=> item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=> (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.start}</CarFooterDate>
                  <AntDesign
                      name='arrowright'
                      size={RFValue(20)}
                      color={theme.colors.title}
                      style={{marginHorizontal: 10}}
                    />
                    <CarFooterDate >{item.end}</CarFooterDate>
                  </CarFooterPeriod>
              </CarFooter>
            </CarWrapper> 
          )}
        />
        }

      </Content>  
    </Container>
  );
}