import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

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
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}
            options={
              {
                title: 'All Categories',
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
          <Stack.Screen name='MealsDetail' component={MealDetailsScreen}
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
