
import React, { useEffect, useCallback } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';
import { ScrollView } from 'react-native-gesture-handler';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/Meals';

const MealDetailScreen = props => {
    const { navigation } = props;
    const mealId = navigation.getParam('mealId');
    const availableMeals = useSelector(state => state.meals.meals)
    const meal = availableMeals.find(meal => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        navigation.setParams({ 'meal': meal, 'toggleFavorite': toggleFavoriteHandler })
    }, [toggleFavoriteHandler, meal])

    return (
        <ScrollView>
            <Image source={{ uri: meal.imageUrl }} style={styles.image}></Image>
            <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                <DefaultText>{meal.duration}</DefaultText>
                <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailsHeader}>Ingredients</Text>
                {meal.ingredients.map(ingredient => {
                    return <ListItem key={ingredient}>{ingredient}</ListItem>
                })}
                <Text style={styles.detailsHeader}>Steps</Text>
                {meal.steps.map(step => {
                    return <ListItem key={step}>{step}</ListItem>
                })}
            </View>
        </ScrollView >
    )
}

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

MealDetailScreen.navigationOptions = navigationData => {
    const meal = navigationData.navigation.getParam('meal');
    const toggleFavorite = navigationData.navigation.getParam('toggleFavorite');
    return {
        headerTitle: meal ? meal.title : '',
        headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title="Favorite"
                iconName="ios-star"
                onPress={toggleFavorite}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: '90%',
        height: 150,
        margin: '5%',
        alignContent: 'center'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsHeader: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20,
        textAlign: 'center'
    },
    listItem: {
        fontFamily: 'Ubuntu-Regular',
        margin: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});


export default MealDetailScreen;