import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavouriteScreen from './screens/FavouriteScreen';
import {Ionicons} from '@expo/vector-icons'


export default function App() {

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator()

  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator screenOptions={
        {
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          sceneContainerStyle: { backgroundColor: '#3f2f25' },
          drawerContentStyle:{backgroundColor: '#351401'},
          drawerInactiveTintColor:'white',
          drawerActiveBackgroundColor:'#e4baa1',
          drawerActiveTintColor:'#351401 '
        }
      }>
        <Drawer.Screen name='All Categories' options={{
          drawerIcon:({color,size})=>(<Ionicons name='list' color={color} size={size}/>)
        }} component={CategoriesScreen} />
        <Drawer.Screen name='Favourites' component={FavouriteScreen} 
        options={{
          drawerIcon:({color,size})=>(<Ionicons name='star' color={color} size={size}/>)
        }} />
      </Drawer.Navigator>
    )
  }

  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer >
        <Stack.Navigator initialRouteName='' screenOptions={
          {
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }
        }>
          {/* <Stack.Screen name='MealsCategories' component={CategoriesScreen}
            options={
              {
                title: 'All Categories',
              }
            }></Stack.Screen> */}
          <Stack.Screen name='MealsCategories' component={DrawerNavigator}
            options={
              {
                headerShown: false
              }
            }></Stack.Screen>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen}
          // options={({ route, navigation }) => {
          //   const cateId = route.params.categoryId
          //   return {
          //     title: cateId,
          //   }
          // }}
          />
          <Stack.Screen name='MealsDetail' options={{
            title:'About The Meal'
          }} component={MealDetailsScreen}
          />
        </Stack.Navigator>
        {/* <CategoriesScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
