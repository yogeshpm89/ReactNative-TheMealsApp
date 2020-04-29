
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import AppHeaderButton from '../components/AppHeaderButton';
import { Switch } from 'react-native-gesture-handler';
import Color from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/Meals';

const FilterScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const dispatch = useDispatch()

    const saveFilters = useCallback(() => {
        const appliedFilter = {
            isGlutenFree,
            isLactoseFree,
            isVegan,
            isVegetarian
        }
        console.log(appliedFilter);
        dispatch(setFilters(appliedFilter));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])


    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label="Gluten free" value={isGlutenFree} onChange={newVal => setIsGlutenFree(newVal)} />
            <FilterSwitch label="Vegan" value={isVegan} onChange={newVal => setIsVegan(newVal)} />
            <FilterSwitch label="Vegeterian" value={isVegetarian} onChange={newVal => setIsVegetarian(newVal)} />
            <FilterSwitch label="Lactose free" value={isLactoseFree} onChange={newVal => setIsLactoseFree(newVal)} />
        </View>
    )
}

const FilterSwitch = props => {
    return <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
            thumbColor={Color.primary.background}
            value={props.value} onValueChange={props.onChange} />
    </View>
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 20
    },
    filterContainer: {
        width: '90%',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});


FilterScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Filters',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title="Favorite"
                iconName="ios-menu"
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}></Item>
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={AppHeaderButton}>
            <Item title="Favorite"
                iconName="ios-save"
                onPress={() => {
                    console.log('save')
                    navData.navigation.getParam('save')();
                }}></Item>
        </HeaderButtons>
    }
};

export default FilterScreen;