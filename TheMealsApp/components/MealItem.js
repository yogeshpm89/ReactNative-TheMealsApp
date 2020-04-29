
import React from 'react';
import { Platform, View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';
import DefaultText from './DefaultText';

const MealItem = props => {
    const meal = props.meal;

    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.mealItem}>
            <TouchableCmp onPress={props.onMealSelect}>
                <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                    <ImageBackground
                        source={{ uri: meal.imageUrl }}
                        style={styles.bgImage}>
                        <Text style={styles.title}>{meal.title}</Text>
                    </ImageBackground>
                </View>
                <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                    <DefaultText>{meal.duration}</DefaultText>
                    <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
                </View>
            </TouchableCmp>
        </View >
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        backgroundColor: '#f5f5f5',
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        borderColor: 'grey',
        borderWidth: 1
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '80%'
    },
    mealDetail: {
        height: '20%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 18,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: 'white',
        padding: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
});


export default MealItem;