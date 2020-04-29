
import React from 'react';
import CategoryGrid from '../components/CategoryGrid';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';


const CategoryScreen = props => {
    return (
        <CategoryGrid {...props}></CategoryGrid>
    )
}

CategoryScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Meal Categories",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title="Favorite"
                iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></Item>
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({});

export default CategoryScreen;