import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Herca from '../assets/logo-herca.png';
import Marketing from '../assets/marketing.jpg';
import customerImg from '../assets/customer.jpg';
import Card from './Card';

const Home = ({navigation}) => {
  return (
    <View style={style.container}>
      <Image source={Herca} style={style.imgHome} />
      <TouchableOpacity onPress={() => navigation.navigate('MarketingDetail')}>
        <Card imgCard={Marketing} textCard="komisi marketing" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Customer')}>
        <Card imgCard={customerImg} textCard="Customer" />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 20,
  },
  imgHome: {
    width: 300,
    height: 70,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default Home;
