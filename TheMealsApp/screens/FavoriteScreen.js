
import React from 'react';
import { View, StyleSheet } from 'react-native';
import MealGrid from '../components/MealGrid';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const FavoriteScreen = props => {
    const meals = useSelector(state => state.meals.favoriteMeals);
    if (meals.length === 0 || !meals) {
        return <View style={styles.content}>
            <DefaultText>No Favorite meal found, start adding some!</DefaultText>
        </View>
    }
    return (
        <MealGrid meals={meals} {...props} />
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

FavoriteScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Favorites',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title="Favorite"
                iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></Item>
        </HeaderButtons>
    }
};

export default FavoriteScreen;