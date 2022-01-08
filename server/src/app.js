import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./utils/config";
import connect from "./db";
import logCreater from "./components/logs/network";

const router = require("./routes/routes");
const app = express();

app.set("port", 3002);
connect(config.db.connect);
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logCreater);

router(app);

export default app;
