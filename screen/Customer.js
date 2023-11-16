import {View, Text, ActivityIndicator, StyleSheet, Button} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';

const Customer = ({navigation}) => {
  let [isLoading, setLoading] = useState(false);
  let [error, setError] = useState();
  let [response, setResponse] = useState([]);
  useEffect(() => {
    fetch('https://firdaus-hercacipta.digitalbytesolutions.com/api/customer', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        result => {
          setLoading(false);
          setResponse(result);
        },
        error => {
          setLoading(false);
          setError(error);
        },
      );
  }, []);
  const getContent = () => {
    if (isLoading) {
      return (
        <ActivityIndicator size={'large'} style={{justifyContent: 'center'}} />
      );
    }
    if (error) {
      return <Text>{error}</Text>;
    }

    const names = response.map((response, i) => {
      return (
        <Text style={style.detailCustomer} key={i}>
          {response.nama}
        </Text>
      );
    });
    return names;
  };
  return (
    <View style={style.listCustomer}>
      {getContent()}
      <Button
        title="Tambah Pembayaran"
        onPress={() => navigation.navigate('FormPembayaran')}
        style={style.btnPembayaran}
      />
    </View>
  );
};

const style = StyleSheet.create({
  listCustomer: {
    marginTop: 5,
  },
  detailCustomer: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    textTransform: 'uppercase',
    fontSize: 14,
    borderRadius: 10,
  },
  btnPembayaran: {
    marginTop: 10,
  },
});

export default Customer;
