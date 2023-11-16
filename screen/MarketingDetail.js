import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';
import {FormatRupiah} from '@arismun/format-rupiah';

const MarketingDetail = () => {
  let [isLoading, setLoading] = useState(false);
  let [error, setError] = useState();
  let [response, setResponse] = useState([]);

  useEffect(() => {
    fetch('https://firdaus-hercacipta.digitalbytesolutions.com/api/penjualan', {
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
        <View style={style.detailOmzet} key={i}>
          <Text style={style.item}>{response.nama}</Text>
          <View style={style.listOmzet}>
            <Text style={style.listLabel}>Bulan </Text>
            <Text>: </Text>
            <Text>{checkMonthName(response.bulan)}</Text>
          </View>
          <View style={style.listOmzet}>
            <Text style={style.listLabel}>Omzet </Text>
            <Text>: </Text>
            <Text>
              <FormatRupiah value={response.jual} />
            </Text>
          </View>
          <View style={style.listOmzet}>
            <Text style={style.listLabel}>Komisi </Text>
            <Text>: </Text>
            <Text>{response.komisi}%</Text>
          </View>
          <View style={style.listOmzet}>
            <Text style={style.listLabel}>Komisi Nominal </Text>
            <Text>: </Text>
            <Text>
              <FormatRupiah value={response.knom} />
            </Text>
          </View>
        </View>
      );
    });
    return names;
  };

  const checkMonthName = month => {
    let monthName;

    if (month == 1) monthName = 'January';
    else if (month == 2) monthName = 'February';
    else if (month == 3) monthName = 'March';
    else if (month == 4) monthName = 'April';
    else if (month == 5) monthName = 'May';
    else if (month == 6) monthName = 'June';
    else if (month == 7) monthName = 'July';
    else if (month == 8) monthName = 'August';
    else if (month == 9) monthName = 'September';
    else if (month == 10) monthName = 'October';
    else if (month == 11) monthName = 'November';
    else if (month == 12) monthName = 'December';

    return monthName;
  };

  return (
    <ScrollView>
      <View style={style.listMarketings}>{getContent()}</View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  listMarketings: {
    marginTop: 10,
  },

  item: {
    padding: 10,
    marginTop: 10,
    fontSize: 15,
    backgroundColor: 'gray',
    borderRadius: 5,
    color: '#fff',
    fontWeight: '500',
  },
  detailOmzet: {
    padding: 5,
    flex: 1,
  },
  listOmzet: {
    flexDirection: 'row',
    padding: 2,
  },
  listLabel: {
    width: 150,
    margin: 2,
    backgroundColor: 'aqua',
    fontSize: 14,
    padding: 4,
    borderRadius: 5,
  },
});

export default MarketingDetail;
