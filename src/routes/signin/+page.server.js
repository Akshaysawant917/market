import { fail, redirect } from '@sveltejs/kit';
import User from '$lib/server/models/user.js';

export const actions = {
    login: async ({ request, cookies }) => {
        try {
            const formData = Object.fromEntries(await request.formData());
            const { email, password } = formData;

            if (!email || !password) {
                return fail(400, { message: 'All fields are required' });
            }

            // 🔹 Find User in Database
            const user = await User.findOne({ email, password }); // Just match email & password

            if (!user) {
                return fail(400, { message: 'Invalid credentials' });
            }

            // 🔹 Store user info in a cookie (Not Secure, but as per your request)
            cookies.set('user_session', JSON.stringify({ email: user.email, role: user.role }), {
                path: '/',
                httpOnly: false, // Can be accessed by JavaScript
                secure: false, // Change to true in production
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 7 // 7 days
            });

            console.log('✅ Login Successful:', user);
            throw redirect(302, '/dashboard'); // Redirect after login

        } catch (error) {
            console.error('❌ Login Error:', error);
            return fail(500, { message: 'Internal Server Error' });
        }
    }
};
