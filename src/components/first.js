import React from 'react';
import {View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Card } from 'react-native-paper';


export default function First() {
  return (
    <View style={styles.container}>
      <Text>Vamos lá testando a nossa aplicação!!!</Text>
      <StatusBar style="auto" />
    </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
