import { StyleSheet } from 'react-native';

export const container = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  inner: {
    paddingHorizontal: 10,
  },
  safe: {
    paddingTop: 55,
  },
  dark: {
    backgroundColor: '#191919',
  }
})

export const text = StyleSheet.create({
  white : {
    color: '#fff'
  },
  primary: {
    color: '#ea1c2d',
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  upper: {
    textTransform: 'uppercase'
  },
  smallPadHor: {
    paddingVertical: 10,
  }
})
