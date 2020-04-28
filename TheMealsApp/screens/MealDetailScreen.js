
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    render(
        <View style={styles.screen}>
            <Text>The MealDetail screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealDetailScreen;