import { View, Text, Image, StyleSheet } from "react-native";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";


const MealDetailsScreen = ({ route }) => {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    return (
        <View>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}>Ingredients</Text>
            </View>
            {
                selectedMeal.ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)
            }
            <View>
                <Text>Steps</Text>
            </View>
            {selectedMeal.steps.map((step) => <Text key={step}>{step}</Text>)}
        </View>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitleContainer: {
        borderBottomColor:'white',
        borderBottomWidth:2,
    },
    subtitle: {
        color:'white'
    }
})