import { View, Text, StyleSheet } from "react-native";


const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
    return (
        <View style={styles.details}>
            <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability}</Text>
        </View>
    );
};

export default MealDetails;

const styles = StyleSheet.create({
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
})