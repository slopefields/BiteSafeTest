import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from "react-native"
import { StatusBar } from "expo-status-bar"

export default function LoginScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Login Section */}
                <View style={styles.card}>
                    <Text style={styles.title}>Login</Text>
                    <Text style={styles.subtitle}>Scan. Select. Eat with confidence.</Text>

                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/login-image.png")} style={styles.image} resizeMode="contain" />
                    </View>

                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.input} placeholder="Enter your username" placeholderTextColor="#a7a7a7" />

                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter password"
                            placeholderTextColor="#a7a7a7"
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                        <View style={styles.linkContainer}>
                            <Text style={styles.linkText}>
                                Not registered yet?
                                <Text style={styles.link} onPress={() => navigation.navigate("SignUp")}>
                                    {" "}
                                    Create Account
                                </Text>
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Brand Section */}
                <View style={styles.card}>
                    <View style={styles.brandContainer}>
                        <Text style={styles.brandText}>
                            <Text style={styles.brandBold}>Bite</Text>
                            <Text style={[styles.brandBold, styles.brandGreen]}>Safe</Text>
                        </Text>
                    </View>

                    <Text style={styles.tagline}>
                        Eat <Text style={styles.greenText}>Smarter</Text>, Live <Text style={styles.greenText}>Safer</Text>.
                    </Text>

                    <Text style={styles.description}>Eat for changes and stay protected with AI-powered food safety.</Text>

                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/landing-image.png")} style={styles.image} resizeMode="contain" />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.buttonText}>Get Started</Text>
                    </TouchableOpacity>

                    <View style={styles.linkContainer}>
                        <Text style={styles.linkText}>
                            Already have an account?
                            <Text style={styles.link} onPress={() => navigation.navigate("Login")}>
                                {" "}
                                Login
                            </Text>
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    scrollContainer: {
        padding: 16,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 24,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#727272",
        marginBottom: 16,
    },
    imageContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 16,
    },
    image: {
        width: 150,
        height: 150,
    },
    formContainer: {
        width: "100%",
    },
    label: {
        fontSize: 14,
        marginBottom: 4,
    },
    input: {
        backgroundColor: "#f0f0f0",
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 14,
    },
    button: {
        backgroundColor: "#55d684",
        borderRadius: 8,
        padding: 14,
        alignItems: "center",
        marginBottom: 12,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    linkContainer: {
        alignItems: "center",
    },
    linkText: {
        fontSize: 12,
        color: "#727272",
    },
    link: {
        color: "#55d684",
        fontWeight: "500",
    },
    brandContainer: {
        marginBottom: 8,
    },
    brandText: {
        fontSize: 20,
        fontWeight: "500",
    },
    brandBold: {
        fontWeight: "700",
    },
    brandGreen: {
        color: "#55d684",
    },
    tagline: {
        fontSize: 16,
        marginBottom: 8,
    },
    greenText: {
        color: "#55d684",
    },
    description: {
        fontSize: 14,
        color: "#727272",
        marginBottom: 16,
    },
})

