const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: { type: String },
  address: [
    {
      name: String,
      phoneno: String,
      houseno: String,
      street: String,
      landmark: String,
      city: String,
      state: String,
      country: String,
      postalcode: String,
    },
  ],

  order: [{ type: mongoose.Schema.Types.ObjectId, ref: "order" }],

  createAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
