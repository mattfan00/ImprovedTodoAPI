var mongoose = require("mongoose")

var listSchema = new mongoose.Schema({
  name: String,
  display: {
    type: Boolean,
    default: true
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Todo"
    }
  ]
})

module.exports = mongoose.model("List", listSchema)