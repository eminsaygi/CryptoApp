import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View, Text} from 'react-native';

import {
  HeaderBar,
  CurrencyLabel,
  TextButton,
  TransactionsHistory,
} from '../components';
import {dummyData, COLORS, SIZES, FONTS} from '../constants';
const Transaction = ({route}) => {
  const [selectedCurrency, setSelectedCurrency] = React.useState(null);
  React.useEffect(() => {
    const {currency} = route.params;
    setSelectedCurrency(currency);
  });

  function renderTrade() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          padding: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.white,
          ...styles.shadow,
        }}>
        <CurrencyLabel
          icon={selectedCurrency?.image}
          currency={selectedCurrency?.currency}
          code={selectedCurrency?.code}></CurrencyLabel>
        <View
          style={{
            marginTop: SIZES.padding,
            marginBottom: SIZES.padding * 1.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{...FONTS.h2}}>
            {selectedCurrency?.wallet.crypto} {selectedCurrency?.code}
          </Text>
          <Text style={{color: COLORS.darkGray, ...FONTS.body4}}>
            ${selectedCurrency?.wallet.value}
          </Text>
        </View>
        <TextButton
          label="Trade"
          onPress={() => Console.log('Button Trade Passed')}></TextButton>
      </View>
    );
  }
  function renderTransactionsHistory() {
    return (
      <TransactionsHistory
        customContainerStyle={{...styles.shadow}}
        history={selectedCurrency?.transactionHistory}></TransactionsHistory>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderBar right={false}></HeaderBar>
      <ScrollView>
        <View style={{flex: 1, paddingBottom: SIZES.padding}}>
          {renderTrade()}
          {renderTransactionsHistory()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});

export default Transaction;
