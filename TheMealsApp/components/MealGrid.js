
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';


const MealGrid = props => {
    const meals = props.meals;
    const renderMealItem = (itemData) => {
        return <MealItem meal={itemData.item} onMealSelect={() => props.navigation.navigate({ routeName: 'MealDetail', params: { mealId: itemData.item.id } })}></MealItem>
    }
    return (
        <View style={styles.grid}>
            <FlatList data={meals} keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            ></FlatList>
        </View >
    )
}

const styles = StyleSheet.create({
    grid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


export default MealGrid;