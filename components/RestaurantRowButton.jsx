import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';  // Ensure StyleSheet is imported here

const RestaurantRowButton = ({ restaurant, restaurantAddress }) => {
  return (
    <TouchableOpacity style={styles.restaurantCard}>
      <Image 
        source={restaurant.image ? { uri: restaurant.image } : require('../assets/Placeholder.png')} 
        style={styles.restaurantImage} 
      />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantAddress}>{restaurantAddress}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '105%',
    marginLeft: '-2.5%',
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
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

export default RestaurantRowButton;
