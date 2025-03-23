import React, { useState } from 'react';
import { StyleSheet, TextInput, View, ScrollView } from 'react-native';
import { geminiAPI } from "../services/geminiSearch.js";
import RestaurantRowButton from './RestaurantRowButton.jsx';

const SearchBar = () => {
  const [text, onChangeText] = useState("");
  const [restaurantInfo, setRestaurantInfo] = useState({
    restaurantNames: [],
    restaurantAddresses: [],
  });

  async function fetchInput() {
    if (text.trim() !== "") {
      const response = await geminiAPI(text);

      const restaurantNames = response.map((entry) => ({
        name: entry.RestaurantName,
        image: entry.Image || null,
      }));
      const restaurantAddresses = response.map((entry) => entry.Address);

      setRestaurantInfo({ restaurantNames, restaurantAddresses });
      onChangeText("");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a place"
        onChangeText={onChangeText}
        value={text}
        onSubmitEditing={fetchInput}
      />
      <ScrollView contentContainerStyle={[styles.scrollContainer, { paddingBottom: 200 }]} showsVerticalScrollIndicator={false}>
        {restaurantInfo.restaurantNames.map((restaurant, index) => (
          <View key={index} style={styles.resultContainer}>
            <RestaurantRowButton
              restaurant={restaurant}
              restaurantAddress={restaurantInfo.restaurantAddresses[index]}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginBottom: 5, // Add a small consistent margin here
  },
  input: {
    // Remove the marginBottom from here
    backgroundColor: '#d9d9d9',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: '100%',
    fontSize: 18,
    color: '#000000',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  resultContainer: {
    marginBottom: 15,
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 16,  // This rounds the corners of the restaurant card
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '105%',
    marginLeft: '-2.5%',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 8,  // Rounds the restaurant image
    marginRight: 16,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 14,
    color: '#666',
  },
});


export default SearchBar;
