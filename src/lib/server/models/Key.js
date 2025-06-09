import mongoose from 'mongoose';

const keySchema = new mongoose.Schema({
 _id: { type: String, required: true },
    provider_id: { type: String, required: true },
    provider_user_id: { type: String, required: true },
    hashed_password: { type: String, required: true },
});


const Key = mongoose.model('Key', keySchema);

export default Key;
