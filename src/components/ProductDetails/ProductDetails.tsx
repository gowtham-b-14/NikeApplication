import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";
import products from "../../data/products";
import Icon from "react-native-vector-icons/FontAwesome";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../stack/Stack";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../../store/cartSlice";

type PdpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PDP"
>;

export interface RootStoresProp {
  navigation: PdpScreenNavigationProp;
}

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state?.products.selectedProduct);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const addToCart = () => {
    console.log("click");
    dispatch(cartSlice.actions.addCartItem({ product }));
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={styles.container}>
          <Text style={styles.title}>{product.name}</Text>

          <Text style={styles.price}>$ {product.price}</Text>

          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <Pressable style={styles.cartButton} onPress={() => addToCart()}>
        <Text style={styles.cartButtonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
      {/* <Pressable style={styles.icon}>
        <Icon name="close" size={24} color="white" />
      </Pressable> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
  },
  cartButton: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  cartButtonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  icon: {
    position: "absolute",
    top: "5%",
    right: 20,
    backgroundColor: "#000000AA",
    borderRadius: 50,
    padding: 5,
  },
});

export default ProductDetailsScreen;
