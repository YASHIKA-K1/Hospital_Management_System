import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required."],
    minLength: [3, "First Name must be at least 3 characters long."],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required."],
    minLength: [3, "Last Name must be at least 3 characters long."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    validate: [validator.isEmail, "Invalid email format."],
  },
  phone: {
    type: String,
    required: [true, "Phone Number is required."],
    minLength: [11, "Phone Number must be exactly 11 digits long."],
    maxLength: [11, "Phone Number must be exactly 11 digits long."],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
    minLength: [10, "Message must be at least 10 characters long."],
  },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;
