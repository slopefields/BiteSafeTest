import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

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
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 6,
  },
  restaurantImage: {
    width: 110,
    height: 110,
    borderRadius: 20,
    marginRight: 20,
  },
  restaurantInfo: {
    flex: 1,
  },
  restaurantName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  restaurantAddress: {
    fontSize: 18,
    color: '#666',
  },
});

export default RestaurantRowButton;
