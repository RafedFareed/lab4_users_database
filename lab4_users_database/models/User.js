const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    trim: true,
    lowercase: true,
    minlength: 4
  },
  username: {
    type: String,
    required: [true, 'Please enter your username'],
    alias: 'surname',
    required: true,
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    validate: function (value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
  address: {
    street: {
      type: String,
      required: true
    },
    suite: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    }
  },
  phone: {
    type: Number,
    required: true
  },
  website: {
    type: String,
    required: true
  },
  company: {
    name: {
      type: String,
      required: true
    },
    catchPhrase: {
      type: String,
      required: true
    },
    bs: {
      type: String,
      required: true
    }
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;