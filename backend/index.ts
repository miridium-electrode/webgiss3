import express from "express";
import { getData } from "./getData";
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = 8080;

app.get('/', getData);

app.listen(PORT, () => {
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
});