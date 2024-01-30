import  express  from "express";
import todoRoutes from "./routes/Todo.routes";
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api/v1/todo",todoRoutes)

app.listen(7010, () => {
    console.log("server is running");
})