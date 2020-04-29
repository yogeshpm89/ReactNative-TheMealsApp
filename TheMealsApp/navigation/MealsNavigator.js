import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import FilterScreen from '../screens/FilterScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOpt = {
    headerStyle: {
        backgroundColor: Colors.primary.background
    },
    headerTintColor: Colors.primary.text
}

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeal: CategoryMealScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOpt
});

const FavoriteNavigator = createStackNavigator({
    Favorite: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOpt
})

const tabConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={Colors.primary.active.text} />
            },
            tabBarColor: Colors.primary.active.background,
            tabBarLabel: <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16 }}>Meal</Text>
        }
    },
    Favorites: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={Colors.secondary.active.text} />
            },
            tabBarColor: Colors.secondary.active.background,
            tabBarLabel: <Text style={{ fontFamily: 'Ubuntu-Bold', fontSize: 16 }}>Favorites</Text>
        }
    },
};


const MealFavTabNavigator = Platform.OS === 'android' ?
    createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: Colors.primary.background,
        shifting: true,
        barStyle: {
            backgroundColor: 'red',
            color: 'blue'
        }
    }) :
    createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
        }
    })

const FiltersNavigator = createStackNavigator({
    Filters: {
        screen: FilterScreen,
        navigationOptions: {
            drawerLabel: 'TEST SET'
        }
    }
}, {
    defaultNavigationOptions: defaultStackNavOpt
})
const MainNavigator = createDrawerNavigator({
    MealsFav: MealFavTabNavigator,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary.background,
        itemStyle: {
            fontFamily: 'Ubuntu-Regular',
            backgroundColor: 'red',
            textColor: 'white'
        }
    }
})

export default createAppContainer(MainNavigator);