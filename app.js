var express = require("express")
    app = express()
    port = 3001
    cors = require("cors")
    bodyParser = require("body-parser")
    mongoose = require("mongoose")
    Todo = require("./models/todos")
    todoRoutes = require("./routes/todos")



app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/improved_todo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


app.use(todoRoutes)

  
app.listen(port, () => console.log("Starting improved_todo server"))