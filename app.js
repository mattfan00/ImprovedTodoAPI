var express = require("express")
    app = express()
    port = 3001
    cors = require("cors")
    bodyParser = require("body-parser")
    mongoose = require("mongoose")
    todoRoutes = require("./routes/todos")
    listRoutes = require("./routes/lists")



app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/improved_todo', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});


app.use(todoRoutes)
app.use(listRoutes)

  
app.listen(port, () => console.log("Starting improved_todo server"))