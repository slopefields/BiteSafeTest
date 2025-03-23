import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ConnectingScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.glassesContainer}>
                    <View style={styles.glasses}>
                        <View style={styles.lens}></View>
                        <View style={styles.bridge}></View>
                        <View style={styles.lens}></View>
                    </View>
                </View>
                <Text style={styles.connectingText}>Connecting...</Text>
                <Image
                    source={require('../assets/connecting-image.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>




            <View style={styles.navbar}>
                <TouchableOpacity style={styles.navButton}>
                    <Ionicons name="camera" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Main')}>
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navButton}>
                    <Ionicons name="glasses-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    glassesContainer: {
        marginBottom: 40,
    },
    glasses: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    lens: {
        width: 80,
        height: 60,
        borderWidth: 12,
        borderColor: '#55d684',
        borderRadius: 10,
        backgroundColor: 'transparent',
    },
    bridge: {
        width: 20,
        height: 12,
        backgroundColor: '#55d684',
    },
    connectingText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000',
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#55d684',
        height: 90,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        left: 0,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    navButton: {
        padding: 10,
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 50, // Adjust this value to move the image lower
    },
});