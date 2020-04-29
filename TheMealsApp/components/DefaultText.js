
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = props => {
    return (
        <Text style={styles.title}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Ubuntu-Bold',
    }
});


export default DefaultText;