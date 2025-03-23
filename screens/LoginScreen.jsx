import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.titleText}>Login</Text>
                    <Text style={styles.subtitleText}>Scan. Detect. Eat with confidence.</Text>

                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../assets/login-image.png')}
                            style={styles.image}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.labelText}>Username</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Don't use your real name"
                            placeholderTextColor="#a7a7a7"
                            value={username}
                            onChangeText={setUsername}
                        />

                        <Text style={styles.labelText}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Min. 8 characters"
                            placeholderTextColor="#a7a7a7"
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />

                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={() => {
                                navigation.navigate('Main');
                            }}
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.registerContainer}>
                            <Text style={styles.registerText}>Not registered yet? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.registerLink}>Create Account</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    titleText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    subtitleText: {
        fontSize: 18,
        color: '#000000',
        marginBottom: 24,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    formContainer: {
        marginTop: 20,
    },
    labelText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        marginBottom: 24,
    },
    loginButton: {
        backgroundColor: '#55d684',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 24,
    },
    loginButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerText: {
        fontSize: 16,
        color: '#000000',
    },
    registerLink: {
        fontSize: 16,
        color: '#55d684',
        fontWeight: 'bold',
    },
});