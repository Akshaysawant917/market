import { fail } from '@sveltejs/kit';
import mongoose from 'mongoose';
import User from '$lib/server/models/user.js';
import { auth } from '$lib/server/lucia.js';
import Profile from '$lib/server/models/Profile.js';

export const actions = {
  signup: async ({ request, cookies }) => {
    try {
      console.log('📌 Received signup request');

      // Use formData() instead of json() if the form is sent as x-www-form-urlencoded
      const formData = await request.formData();
      console.log('📌 Raw formData:', formData);

      // Extract form fields
      const name = formData.get('name');
      const email = formData.get('email');
      const password = formData.get('password');
      const role = formData.get('role');
      // const userId = formData.get('userId');

      console.log('📌 Parsed form fields:', { name, email, password, role });

      auth.getKey("email", email).catch(() => null)

      if (!name || !email || !password || !role) {
        console.log('⚠️ Validation failed: Missing fields');
        return fail(400, { message: 'All fields are required' });
      }
      // Check if a user already exists
      const existingKey = await auth.getKey("email", email).catch(() => null);
      console.log('📌 Existing user:', existingKey);
      if (existingKey) {
        return fail(400, { message: 'User with this email already exists (auth)' });
      }




      await auth.createUser({
        key: {
          providerId: "email",
          providerUserId: formData.get("email"), // email string
          password: formData.get("password") // plain password
        },
        attributes: {
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          role: formData.get("role")
        }
      });

      // Create new user
      const newUser = new Profile({
        username: name,
        email,
        password, // Hash this in production
        role,
        userId
      });

      console.log('📌 User before saving:', newUser);

      // Save user to database
      await newUser.save();
      console.log('✅ User saved successfully:', newUser);

      const key = await auth.useKey("email", email, password)

      const user = await auth.getUser(key.userId)

      const session = await auth.createSession({
        userId: luciaUser.userId,
        attributes: {

        }
      })

      const sessionCookie = auth.createSessionCookie(session)

      cookies.set(sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      )

      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      console.error('❌ Signup error:', error);
      return fail(500, { message: 'Internal Server Error' });
    }
  }
};
