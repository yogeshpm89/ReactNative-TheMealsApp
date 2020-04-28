
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FilterScreen = props => {
    render(
        <View style={styles.screen}>
            <Text>The Filter screen</Text>
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


export default FilterScreen;