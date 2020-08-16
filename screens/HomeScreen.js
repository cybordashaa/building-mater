// @ts-nocheck
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Go to details screen"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
