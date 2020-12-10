import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { container, text } from '../styles';

export default function Error({ title, message })
{

  return (
    <View style={[container.inner, styles.errorContainer]}>
      <Text style={[text.headline, text.white, text.upper, text.smallPadHor]}>
        {title}
      </Text>
      <View style={styles.innerError}>
        <Text style={text.white}>
          {message}
        </Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: 'red'
  },
  innerError: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
})
