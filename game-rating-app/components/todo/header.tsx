import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 35,
    paddingTop: 30,
    backgroundColor: '#1c1c22'
  },
  title: {
    color: '#f1f1f1',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  }
})

export default Header;
