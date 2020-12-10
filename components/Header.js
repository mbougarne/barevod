import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Header = ({ title }) => {

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.logo}
        source={require('../assets/icon.png')}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexShrink: 3,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  logo: {
    width: 55,
    height: 35,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})

export default Header;
