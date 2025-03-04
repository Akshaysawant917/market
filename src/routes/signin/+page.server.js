import { error, redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import { POCKETBASE_URL } from '$env/static/private';

const pb = new PocketBase(POCKETBASE_URL);

export const actions = {
    login: async ({ request, cookies }) => {
        try {
            const formData = await request.formData();
            const email = formData.get('email');
            const password = formData.get('password');

            // Authenticate user in PocketBase
            const authData = await pb.collection('users').authWithPassword(email, password);
            
            console.log("User Logged In:", authData);

            // Store the authentication token in cookies
            cookies.set('pb_auth', authData.token, {
                path: '/',
                httpOnly: true,  // Prevents client-side access
                secure: true,    // Use only on HTTPS
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 7 // 1 week expiration
            });

            return { success: true, user: authData.record };
        } catch (err) {
            console.error("Login Error:", err);
            return error(400, { message: 'Invalid email or password' });
        }
    }
};
