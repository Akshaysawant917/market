import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase';
import {POCKETBASE_URL} from '$env/static/private'

const pb = new PocketBase(POCKETBASE_URL);

export const actions = {
    signup: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get('email');
            const password = formData.get('password');
            const name = formData.get('name');
            const role = formData.get('role');

            console.log("Form Data:", { email, password, name, role });

            // ✅ Ensure all fields are not empty
            if (!email || !password || !name || !role) {
                throw new Error("All fields are required!");
            }

            // ✅ Create user in PocketBase
            const user = await pb.collection('users').create({
                email,
                password,
                passwordConfirm: password, // Required by PocketBase
                name,
                role
            });

            console.log("User Created:", user);

            return { success: true, user };
        } catch (err) {
            console.error("Signup Error:", err);
            return error(400, { message: err.message });
        }
    }
};
