import { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import IconButton from "../components/IconButton";
import Lists from "../components/MealDetail/Lists";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";


const MealDetailsScreen = ({ route, navigation }) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)

    const handleRightTopButton = () => {
        console.log('Pressed!');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton onPress={handleRightTopButton} icon="star" color="white" />
            }
        })
    }, [navigation, handleRightTopButton])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails textStyle={styles.detailText} duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <Lists lists={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <Lists lists={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
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
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%',
        marginHorizontal: 'auto'
    }
})