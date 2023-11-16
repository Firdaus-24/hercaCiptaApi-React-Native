import {View, Text, StyleSheet, TextInput, Alert, Button} from 'react-native';
import React from 'react';
import Dropdown from 'react-native-input-select';

const FormPembayaran = () => {
  const [customers, setCustomers] = React.useState('');
  const [penjualan, setPenjualan] = React.useState('');
  const [ispayment, setPayment] = React.useState('');

  const handlePost = async () => {
    const data = {
      penjualan_id: penjualan,
      customer_id: customers,
      payment: ispayment,
    };
    const url =
      'https://firdaus-hercacipta.digitalbytesolutions.com/api/payment';

    let result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application-json',
      },
      body: data,
    });
    // result = await result.JSON();

    if (result) {
      console.warn('add data success');
      setCustomers('');
      setPenjualan('');
      setPayment('');
    }
  };
  return (
    <View style={{flex: 1, padding: 10, marginTop: 10}}>
      <Dropdown
        label="Nomor Penjualan"
        placeholder="Pilih Nomor Penjualan"
        options={[
          {label: 'TRX001', value: '1'},
          {label: 'TRX002', value: '2'},
          {label: 'TRX003', value: '3'},
          {label: 'TRX004', value: '4'},
          {label: 'TRX005', value: '5'},
          {label: 'TRX006', value: '6'},
          {label: 'TRX007', value: '7'},
          {label: 'TRX008', value: '8'},
          {label: 'TRX009', value: '9'},
          {label: 'TRX010', value: '10'},
          {label: 'TRX011', value: '11'},
          {label: 'TRX012', value: '12'},
        ]}
        selectedValue={penjualan}
        onValueChange={selectedValue => setPenjualan(selectedValue)}
        primaryColor={'green'}
      />
      <Dropdown
        label="Customers"
        placeholder="Pilih Customers"
        options={[
          {label: 'MAMAN', value: '1'},
          {label: 'UJANG', value: '2'},
          {label: 'UDIN', value: '3'},
        ]}
        selectedValue={customers}
        onValueChange={customers => setCustomers(customers)}
        primaryColor={'green'}
      />
      <Text style={{fontSize: 12, marginBottom: 15}}>Payment</Text>
      <TextInput
        style={styles.input}
        onChangeText={ispayment => setPayment(ispayment)}
        value={ispayment}
        placeholder="nominal pembayaran"
        keyboardType="numeric"
      />

      <Button style={styles.button} onPress={handlePost} title="SEND"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  selectedDate: {
    marginTop: 16,
    fontSize: 16,
  },
  input: {
    height: 65,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 10,
    borderRadius: 10,
    width: '100%',
  },
  button: {
    width: '100%',
    height: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default FormPembayaran;
