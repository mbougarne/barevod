import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { container, text } from '../styles';

export default function Movies({ category, navigation })
{

  let [movies, setMovies ] = useState([]);

  useEffect(() => {

    const loadMovies = async () => {
      let res = await fetch(`https://sample-movie-api.web.app/movies?category=${category.filter}`);
      let { data } = await res.json();
      setMovies(data)
    }
    loadMovies();

  }, []);

  const goToItem = item => navigation.navigate('Single', { item });

  const renderMovie = ({ item }) => (
    <TouchableOpacity onPress={e => goToItem(item)}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: `${item.image}`
          }}
        />
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={container.inner}>
      <Text style={[text.headline, text.white, text.upper, text.smallPadHor]}>
        {category.title}
      </Text>
      <FlatList
        data={movies}
        renderItem={renderMovie}
        keyExtractor={item => item.id}
        horizontal={true}
        initialNumToRender={3}
      />
    </View>
  )

}

const styles = StyleSheet.create({
  logo: {
    width: 190,
    height: 250,
    marginRight: 10,
  }
})
