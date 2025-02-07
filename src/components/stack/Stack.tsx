import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductsScreen from "../ProductScreen/ProductsScreen";
import ProductDetailsScreen from "../ProductDetails/ProductDetails";
import ShoppingCart from "../ShoppingCartScreen/ShoppingCartScreen";
import { Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

export type RootStackParamList = {
  PDP: undefined;
  PLP: undefined;
  CART: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackScreen() {
  const cartItems = useSelector((state) => state?.cart.items);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="PLP"
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="PLP"
          component={ProductsScreen}
          options={({ navigation }) => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("CART")}
                style={{ flexDirection: "row" }}
              >
                <Icon name="shopping-cart" size={18} color="gray" />
                <Text style={{ marginLeft: 5, fontWeight: "500" }}>
                  {cartItems.length}
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="PDP"
          component={ProductDetailsScreen}
          options={{ presentation: "modal" }}
        />
        <Stack.Screen name="CART" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackScreen;
