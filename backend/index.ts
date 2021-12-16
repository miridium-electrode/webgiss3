import express from "express";
import { getData } from "./getData";
const cors = require('cors');
require('dotenv').config()

const app = express();
app.use(cors());
const PORT = process.env.APP_PORT;

app.get('/', getData);

app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
});