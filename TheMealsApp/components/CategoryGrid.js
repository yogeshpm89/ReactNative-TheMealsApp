
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { CATEGORIES } from '../data/mock-data'
import CategoryGridItem from './CategoryGridItem';

const CategoryGrid = props => {
    const renderGridItem = (itemData) => {
        return <CategoryGridItem itemData={itemData}
            onSelect={() => { props.navigation.navigate({ routeName: 'CategoryMeal', params: { categoryId: itemData.item.id } }) }}
            color={itemData.item.color}
        ></CategoryGridItem>
    }
    return (
        <View style={styles.list}>
            <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1
    }
});

export default CategoryGrid;