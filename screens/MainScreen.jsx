import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.content}>
                <Text style={styles.headerText}> Feeling Hungry ? </Text>

                < TouchableOpacity style={styles.bannerButton} >
                    <Text style={styles.bannerText}> Peanut - free dishes at Olive Garden </Text>
                </TouchableOpacity>
            </View>

            < View style={styles.navbar} >
                <TouchableOpacity style={styles.navButton}>
                    <Ionicons name="grid-outline" size={24} color="white" />
                </TouchableOpacity>

                < TouchableOpacity style={styles.navButton} >
                    <Ionicons name="search" size={24} color="white" />
                </TouchableOpacity>

                < TouchableOpacity style={styles.navButton} >
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
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 60,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center',
        marginBottom: 30,
    },
    bannerButton: {
        backgroundColor: '#d9d9d9',
        borderRadius: 30,
        paddingVertical: 16,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
    },
    bannerText: {
        color: '#a7a7a7',
        fontSize: 18,
    },
    navbar: {
        flexDirection: 'row',
        backgroundColor: '#55d684',
        height: 60,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    navButton: {
        padding: 10,
    },
});