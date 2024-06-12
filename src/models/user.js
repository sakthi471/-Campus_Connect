import mongoose, { Schema} from 'mongoose';

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

const User =mongoose.models?.User ||mongoose.model("User", userSchema);

export default User;
