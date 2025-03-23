import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { geminiAPI } from '../services/geminiSearch.js';

const SearchBar = () => {
    const [text, onChangeText] = useState('');
    const [restaurantInfo, setRestaurantInfo] = useState({ restaurantNames: [], restaurantAddresses: [] });

    async function fetchInput() {
        if (text.trim() !== '') {
            const response = await geminiAPI(text);

            // Extract restaurant names and addresses
            const restaurantNames = response.map(entry => entry.RestaurantName);
            const restaurantAddresses = response.map(entry => entry.Address);

            // Update state correctly
            setRestaurantInfo({ restaurantNames, restaurantAddresses });
            onChangeText('');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter a place"
                onChangeText={onChangeText}
                value={text}
                onSubmitEditing={fetchInput} // Trigger fetch on Enter key press
            />
            <ScrollView>
                {restaurantInfo.restaurantNames.map((restaurant, index) => (
                    <View key={index} style={styles.resultContainer}>
                        <Text style={styles.restaurantText}>{restaurant}</Text>
                        <Text style={styles.addressText}>{restaurantInfo.restaurantAddresses[index]}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        width: '100%',
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 20,
        width: '100%',
        fontSize: 18,
        color: '#000000',
    },
    resultContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    restaurantText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    addressText: {
        fontSize: 16,
        color: '#666',
    },
});

export default SearchBar;
