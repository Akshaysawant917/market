import { lucia } from 'lucia';
import { mongoose as mongooseAdapter } from '@lucia-auth/adapter-mongoose';
import User from '$lib/server/models/User.js';
import Session from '$lib/server/models/Session.js';
import Profile from '$lib/server/models/Profile.js';
import Key from '$lib/server/models/Key.js';
import { LUCIA_SECRET } from '$env/static/private';

export const authErrorMessages = {
    AUTH_INVALID_KEY_ID: "Invalid email or username. Please check and try again.",
    AUTH_INVALID_PASSWORD: "Incorrect password. Please try again.",
    AUTH_DUPLICATE_KEY_ID: "An account with this email already exists.",
    AUTH_EXPIRED_SESSION: "Your session has expired. Please log in again.",
};

// ✅ Initialize Lucia authentication
export const auth = lucia({
    adapter: mongooseAdapter({ User, Key, Session, Profile }),
    env: 'PROD', // Change to 'PROD' for production
    secret: LUCIA_SECRET,
    cookies: {
        secure: false // Set `true` for HTTPS
    },
    transformUser: (user) => ({
        id: user._id.toString(), // ✅ Corrected to use MongoDB `_id`
        email: user.email
    }),

    getUserAttributes: (databaseUser) => {
        return {
            username: databaseUser.username,
            email: databaseUser.email
        }
    }
});
export default auth;
