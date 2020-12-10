import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { container, text } from '../styles';
import Video from '../components/Video';
import Error from '../components/Error';

export default function Single({ navigation })
{
  let item = navigation.getParam('item');

  const VideoContent = () => {
    return (item.video)
      ? <Video video={item.video} />
      : <Error title="404 Not Found" message="There is no video for this Movie" />
  }

  return (
    <View style={[container.container, container.dark, container.inner]}>
      <View style={styles.detailsContainer}>
        <Text style={text.white}>{item.title}</Text>
        <Text style={text.white}>{item.description}</Text>
      </View>
      <VideoContent />
    </View>
  )
}

const styles = StyleSheet.create({
  detailsContainer: {
    paddingVertical: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
