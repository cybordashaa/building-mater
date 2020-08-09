// @ts-nocheck
import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';

const DetailScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button
        title="Go to details screen ...again"
        onPress={() => navigation.push('Detail')}
      />
      <Button
        title="Go to to home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Go to the first Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
