import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    return (
        <View>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;