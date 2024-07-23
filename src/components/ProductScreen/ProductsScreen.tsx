import React from 'react';
import {Image, StyleSheet, View, FlatList, Pressable} from 'react-native';
import products from '../../data/products';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../stack/Stack';

type PlpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'PLP'
>;

type Props = {
  navigation: PlpScreenNavigationProp;
};

function ProductsScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() =>
              navigation.navigate('PDP', {productid: parseInt(item.id) - 1})
            }>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: '100%', aspectRatio: 1},
  itemContainer: {width: '50%', padding: 1},
});
export default ProductsScreen;
