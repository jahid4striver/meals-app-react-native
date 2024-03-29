import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Lists = ({ lists }) => {
    return lists.map((ingredient) => (
        <View key={ingredient} style={styles.listItems}>
            <Text style={styles.itemText}>{ingredient}</Text>
        </View>
    ));
}

export default Lists;

const styles = StyleSheet.create({
    listItems: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }
})