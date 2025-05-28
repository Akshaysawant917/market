import mongoose from 'mongoose';
import { sequence } from '@sveltejs/kit/hooks';

const MONGODB_URI = 'mongodb+srv://akshaysawant917:m3mD4EncX4EdI7eR@cluster0.9aprz.mongodb.net/marketplace';

let isConnected = false;

export const main = async ({ event, resolve }) => {
    if (!isConnected) {
        try {
            await mongoose.connect(MONGODB_URI, { 
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            });
            isConnected = true;
            console.log('✅ Connected to MongoDB');
        } catch (error) {
            console.error('❌ Error connecting to MongoDB:', error);
            throw new Error('Failed to connect to the database');
        }
    }

    // Get user session from cookies
    const userSession = event.cookies.get('user_session');
    let user = null;

    if (userSession) {
        try {
            user = JSON.parse(userSession); // Convert from string to object
        } catch (error) {
            console.error('⚠️ Failed to parse user session:', error);
            event.cookies.delete('user_session', { path: '/' });
        }
    }

    event.locals.user = user; // Store user in locals

    const response = await resolve(event);
    return response;
};

// Use sequence for handling multiple hooks
export const handle = sequence(main);
