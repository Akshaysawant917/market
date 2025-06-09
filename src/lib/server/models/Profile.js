import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
//   username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true }, // Ensure role is included
  createdAt: { type: Date, default: Date.now }
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
