import mongoose from 'mongoose';

const keySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    provider_id: { type: String, required: true },
    provider_user_id: { type: String, required: true },
    hashed_password: { type: String, required: true },
});


const Key = mongoose.model('Key', keySchema);

export default Key;
