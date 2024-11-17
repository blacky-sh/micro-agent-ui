import express from 'express'
import mongoose from 'mongoose'
import logger from './middlewares/logger.js'
import settings from './routes/settings.js'

const port = process.env.port 
const pwd = process.env.MONGOPWD
const usr = process.env.MONGOUSR

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware to get colorized information in console for every request made to the server.
app.use(logger);

app.use("/settings", settings);

mongoose
  .connect(
    `mongodb+srv://${usr}:${pwd}@backenddb.dxxef.mongodb.net/micro-agent?retryWrites=true&w=majority&appName=backendDb`
  )
  .then(() => {
    console.log("Connected to the database!");
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch(() => console.log("Connection Failed!"));