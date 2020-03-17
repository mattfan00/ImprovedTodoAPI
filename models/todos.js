var mongoose = require("mongoose")

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Cannot be blank"
  },
  listId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Todo", todoSchema)