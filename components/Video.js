import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';
import { container } from '../styles';

export default function VideoPlayer({ video })
{
  return (
    <View style={container.inner}>
      <Video
        source={{uri: `${video}`}}
        style={styles.backgroundVideo}
        controls={true}
      />
    </View>
  )
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

