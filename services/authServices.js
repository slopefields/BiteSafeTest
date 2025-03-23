import { supabase } from './supabase.js';

// Function for registering 
export const signUp = async (username, password) => {
    const { user, error } = await supabase.auth.signUp({
        username,
        password
    });

    if (error) {
        console.error('Error during sign up: ', error.message);
        return null;
    }
}

// Function for signing in
export const signIn = async (username, password) => {
    const { user, error } = await supabase.auth.signInWithPassword({
        username,
        password
    });
    if (error) {
        console.error('Sign In Error: ', error.message);
        return null;
    }
    return user;
}

// Maybe add signing out 