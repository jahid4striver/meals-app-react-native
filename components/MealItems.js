import { useNavigation } from '@react-navigation/native';
import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import MealDetails from './MealDetails';

const MealItems = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const navigateToDetails = () => {
        navigation.navigate('MealsDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItems}>
            <Pressable onPress={navigateToDetails} android_ripple={{ color: '#ccc' }} style={({ pressed }) => [pressed && styles.buttonPressed]} >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    );
};

export default MealItems;

const styles = StyleSheet.create({
    mealItems: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden '
    },
    buttonPressed: {
        opacity: 0.50
    },
})