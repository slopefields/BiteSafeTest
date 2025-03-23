import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function SignUpScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedAllergies, setSelectedAllergies] = useState([]);
    const [showPicker, setShowPicker] = useState(false);

    const allergies = [
        'None',
        'Shellfish',
        'Fish',
        'Nuts',
        'Soy',
        'Gluten',
        'Dairy',
        'Eggs'
    ];

    const handleSignUp = () => {
        // Handle sign up logic here
        // Then navigate to the next screen
        navigation.navigate('Home');
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Sign Up</Text>
                <Text style={styles.subtitle}>A Safer Bite Starts Here!</Text>

                <Image
                    source={require("../assets/registration-image.png")}
                    style={styles.image}
                    resizeMode="contain"
                />

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Don't use your real name"
                        placeholderTextColor="#a7a7a7"
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Min. 8 characters"
                        placeholderTextColor="#a7a7a7"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Text style={styles.label}>Allergies</Text>
                    <TouchableOpacity
                        style={styles.pickerButton}
                        onPress={() => setShowPicker(!showPicker)}
                    >
                        <Text style={styles.pickerButtonText}>
                            {selectedAllergies.length > 0 ? selectedAllergies.join(', ') : 'Select Your Allergies'}
                        </Text>
                        <Text style={styles.dropdownIcon}>▼</Text>
                    </TouchableOpacity>

                    {showPicker && (
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedAllergy}
                                onValueChange={(itemValue) => {
                                    setSelectedAllergy(itemValue);
                                    setShowPicker(false);
                                }}
                            >
                                <Picker.Item label="Select Your Allergies" value="" />
                                {allergies.map((allergy, index) => (
                                    <Picker.Item key={index} label={allergy} value={allergy} />
                                ))}
                            </Picker>
                        </View>
                    )}

                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.signUpButtonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    scrollContainer: {
        flexGrow: 1,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#000000',
        marginTop: 8,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 250,
        alignSelf: 'center',
        marginVertical: 20,
    },
    formContainer: {
        width: '100%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 16,
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#000000',
    },
    pickerButton: {
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pickerButtonText: {
        fontSize: 16,
        color: '#a7a7a7',
    },
    dropdownIcon: {
        fontSize: 16,
        color: '#a7a7a7',
    },
    pickerContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 8,
        marginTop: 4,
    },
    signUpButton: {
        backgroundColor: '#55d684',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 32,
        marginBottom: 20,
    },
    signUpButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});