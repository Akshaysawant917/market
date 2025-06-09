import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // username: { type: String, required: true },
    _id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Ensure password is included
  role: { type: String, required: true }, // Ensure role is included
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

export default User;
