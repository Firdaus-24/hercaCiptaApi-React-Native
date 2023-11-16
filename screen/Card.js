import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';

const Cards = props => {
  return (
    <View style={style.cards}>
      <Image source={props.imgCard} style={style.imgCards} />
      <Text style={style.textCard}>{props.textCard}</Text>
      <Text style={style.textPT}>PT HERCA CIPTA DERMAL</Text>
    </View>
  );
};

const deviceWidht = Math.round(Dimensions.get('window').width);
const style = StyleSheet.create({
  cards: {
    marginBottom: 20,
    width: deviceWidht - 35,
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
    overflow: 'hidden',
  },
  textCard: {
    color: '#000',
    fontFamily: 'Nunito-bolditalic',
    fontWeight: '800',
    fontSize: 20,
    textTransform: 'uppercase',
    padding: 10,
    // marginTop:50
  },
  textPT: {
    paddingLeft: 10,
    // marginTop:50
  },
  imgCards: {
    height: 120,
    width: 380,
  },
});

export default Cards;
