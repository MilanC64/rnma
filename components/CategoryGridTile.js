import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}
        >
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text style={styles.categoryMenuText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150
    },
    container: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 10
    },
    categoryMenuText: {
        fontSize: 15,
    }

});

export default CategoryGridTile;