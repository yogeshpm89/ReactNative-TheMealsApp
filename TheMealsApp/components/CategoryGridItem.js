
import React from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform, View, Text, StyleSheet } from 'react-native';


const CategoryGridItem = props => {
    const itemData = props.itemData;
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }
    return <View style={styles.gridItem}>
        <TouchableComponent
            onPress={props.onSelect} >
            <View style={{ ...styles.container, ...{ backgroundColor: itemData.item.color } }}>
                <Text style={styles.title} numberOfLines={2}>{itemData.item.title}</Text>
            </View>
        </TouchableComponent>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        alignItems: 'stretch',
        margin: 8,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18
    }
});


export default CategoryGridItem;