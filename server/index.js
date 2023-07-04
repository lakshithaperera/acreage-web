require("dotenv").config();
const express = require("express");
const cors = require("cors"); // added

const connectDB = require("./config/MailListdb");
const connectDBS = require("./config/SurveyFormdb");

const app = express();

// routes
const todo = require("./routes/MailListRoute");
const survey = require("./routes/SurveyFormRoute");

// connect database
connectDB();
connectDBS();

// cors
app.use(cors()); // added

// initialize middleware
app.use(express.json());
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("API is running..");
});

// use routes
app.use("/api/todo", todo);
app.use("/api/survey", survey);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
});