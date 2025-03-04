import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

import {POCKETBASE_URL} from '$env/static/private'

const pb = new PocketBase(POCKETBASE_URL);

export const actions = {
    login: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get('email');
            const password = formData.get('password');

            // Authenticate user in PocketBase
            const authData = await pb.collection('users').authWithPassword(email, password);

            console.log("User Logged In:", authData);

            return { success: true, user: authData.record };
        } catch (err) {
            console.error("Login Error:", err);
            return error(400, { message: 'Invalid email or password' });
        }
    }
};
