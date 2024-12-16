import mongoose from "mongoose";

const accountSchama = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  guardiansName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  cast: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  collage: {
    type: String,
    required: true,
  },
  collageCode: {
    type: Number,
    required: true,
  },

  nationality: {
    type: String,
    required: true,
  },

  password: {
    type: Number,
    required: true,
  },

  physically_challenged: {
    type: String,
    required: true,
  },

  programeName: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    required: true,
  },
  Awar_name:{
    type:String,
    required:true,
  },
  zip: {
    type: Number,
    required: true,
  },
  aggree: {
    type: Boolean,
    required: true,
  },
});

const Account = mongoose.model("Register_Account", accountSchama);

export default Account;
