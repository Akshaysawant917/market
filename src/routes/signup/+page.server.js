import { fail } from '@sveltejs/kit';
import mongoose from 'mongoose';
import User from '$lib/server/models/user.js';

export const actions = {
  signup: async ({ request }) => {
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

      console.log('📌 Parsed form fields:', { name, email, password, role });

      if (!name || !email || !password || !role) {
        console.log('⚠️ Validation failed: Missing fields');
        return fail(400, { message: 'All fields are required' });
      }
      // Check if a user already exists
      const existingUser = await User.findOne({ email });
      console.log('📌 Existing user:', existingUser);

      if (existingUser) {
        console.log('⚠️ User already exists with email:', email);
        return fail(400, { message: 'User with this email already exists' });
      }

      // Create new user
      const newUser = new User({
        username: name,
        email,
        password, // Hash this in production
        role
      });

      console.log('📌 User before saving:', newUser);

      // Save user to database
      await newUser.save();
      console.log('✅ User saved successfully:', newUser);

      return { success: true, message: 'User registered successfully' };
    } catch (error) {
      console.error('❌ Signup error:', error);
      return fail(500, { message: 'Internal Server Error' });
    }
  }
};
