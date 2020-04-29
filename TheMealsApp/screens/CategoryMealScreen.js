
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CATEGORIES } from '../data/mock-data'
import MealGrid from '../components/MealGrid';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';


const CategoryMealScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');

    const filteredMeals = useSelector(state => state.meals.filteredMeals);
    const meals = filteredMeals.filter(meal => (meal.categoryIds.indexOf(categoryId) > -1))

    if (meals.length === 0 || !meals) {
        return <View style={styles.content}>
            <DefaultText>No Favorite meal found, please check filters</DefaultText>
        </View>
    }
    return (
        <MealGrid meals={meals} {...props} />
    )
}

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c => c.id === categoryId);
    return {
        headerTitle: selectedCategory.title
    };
}


const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default CategoryMealScreen;