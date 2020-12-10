import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { container } from '../styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../store/actions';
import Movies from '../components/Movies';

export default function Home({ navigation })
{

  let { categories } = useSelector(state => state);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [])


  return (
    <View style={[container.container, container.inner, container.dark]}>
      <FlatList
        data={categories}
        renderItem={({item}) => <Movies category={item} navigation={navigation} />}
        keyExtractor={item => item.filter}
      />
    </View>
  )
}
