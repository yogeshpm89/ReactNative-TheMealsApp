
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryScreen = props => {
    render(
        <View style={styles.screen}>
            <Text>The categories screen</Text>
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


export default CategoryScreen;