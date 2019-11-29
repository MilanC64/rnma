import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return <CategoryGridTile 
                    title={itemData.item.title}
                    color={itemData.item.color}
                    onSelect={() => {
                        props.navigation.navigate({
                            routeName: 'CategoryMeals',
                            params: {
                                categoryId: itemData.item.id
                            }
                        });
                    }}
                />;
    };

    return (
        <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    );
};

//CategoriesScreen beeing a js function is also a js object that can be assigned with certin properties.
//We can assign that props with dot notation.
CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen; 