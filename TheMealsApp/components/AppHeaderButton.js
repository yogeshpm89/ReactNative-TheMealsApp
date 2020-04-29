
import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const AppHeaderButton = props => {
    return <HeaderButton
        {...props}
        IconComponent={Ionicons}
        iconSize={23}
        color={Colors.primary.text}></HeaderButton>
}

const styles = StyleSheet.create({
    button: {
        color: 'white'
    }
});


export default AppHeaderButton;