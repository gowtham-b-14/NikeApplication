import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CartListItem from "../CartListItem/CartListItem";
import { useSelector, UseSelector } from "react-redux";
import {
  cartTotal,
  selectSubtotal,
  seletDeliveryPrice,
} from "../../store/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state?.cart.items);
  const subtotal = useSelector(selectSubtotal);
  const deliveryPrice = useSelector(seletDeliveryPrice);
  const cartTotalPrice = useSelector(cartTotal);
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          // eslint-disable-next-line react/no-unstable-nested-components
          ListFooterComponent={() => (
            <View style={styles.totalsContainer}>
              <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subtotal} US$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryPrice} US$</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{cartTotalPrice} US$</Text>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
  },
  //   footer: {
  //     position: "absolute",
  //     bottom: 0,
  //     width: "100%",
  //     backgroundColor: "white",
  //     borderColor: "gainsboro",
  //     borderTopWidth: 1,
  //     padding: 20,
  //   },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ShoppingCart;
