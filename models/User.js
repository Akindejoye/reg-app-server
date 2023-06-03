import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

  userName: {
    type: String,
    required: [true, 'User Name is required!'],
    min: 2,
    max: 20,
    unique: true
  },
  firstName: {
    type: String,
    required: [true, 'First Name is required!'],
    min: 2,
    max: 20
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required!'],
    min: 2,
    max: 20
  },
  email: {
    type: String,
    required: [true, 'Email is required!'],
    min: 2,
    max: 20,
    unique: true
  },
  occupation: String,
  city: String,
  state: String,
  country: String,
},
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;