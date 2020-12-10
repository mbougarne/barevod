import React from 'react';
import { StyleSheet, View, Text, Button, Linking } from 'react-native';

import { container, text } from '../styles';

export default function About()
{
  const openGitHub = () => {
    Linking.openURL('https://github.com/mbougarne/vod');
  };

  return (
    <View style={[container.container, container.dark, container.inner]}>
      <Text style={text.white}>
        Video On Demand app with RN without You.i Engine for training, the repo is at
      </Text>
      <View style={styles.btnContainer}>
        <Button
          title="GitHub"
          color="#ea1c2d"
          onPress={openGitHub} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  }
})
