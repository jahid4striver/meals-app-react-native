import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealItems from '../components/MealItems';
import { MEALS } from '../data/dummy-data';

const MealsOverviewScreen = ({ route }) => {
    const cateId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(cateId) >= 0
    })

    const renderMealItems = (itemData) => {
        const item = itemData.item;
        const mealsData = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            affordability: item.affordability
        }
        return <MealItems {...mealsData} />
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(itme) => itme.id}
                renderItem={renderMealItems} />
        </View>
    );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})