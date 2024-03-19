const mongoose = require('mongoose');

const chatModel = mongoose.Schema({
  chatname: { type: String, trim: true },
  isGroupChat: { type: Boolean, default: false },
  users: [
    {
      type: mongoose.Schema.Typees.ObjectId,
      ref: "User",
    },
  ],
  latestMessage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
  groupAdmin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
}, {
    timestamps: true,
});


const Chat = mongoose.model("Chat", chatModel);
module.exports = Chat;



//chatName
//isGroup chat
//users
//latest message
//group admin
