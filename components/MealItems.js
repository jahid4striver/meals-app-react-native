import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

const MealItems = ({ title, imageUrl, duration, complexity, affordability }) => {
    return (
        <View style={styles.mealItems}>
            <Pressable android_ripple={{color:'#ccc'}} style={({ pressed }) => [pressed && styles.buttonPressed]} >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                    </View>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}</Text>
                        <Text style={styles.detailItem}>{complexity}</Text>
                        <Text style={styles.detailItem}>{affordability}</Text>
                    </View>
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
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden '
    },
    buttonPressed: {
        opacity: 0.50
    },
})