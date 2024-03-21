import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from './screens/MealsOverviewScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName=''>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}></Stack.Screen>
          <Stack.Screen name='MealsOverview' component={MealsOverviewScreen } />
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
