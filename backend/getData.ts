import { Pool } from 'pg';
import express from "express";

function getData(req: express.Request, res: express.Response) {
	const pool = new Pool({
		user: process.env.POSTGRES_USER,
		password: process.env.POSTGRES_PASSWORD,
		database: process.env.POSTGRES_DB,
		port: (process.env.PG_PORT as unknown) as number,
		host: process.env.PG_HOST
	});

	pool.query('SELECT * FROM webgis_uni')
	.then(r => {
		res.json({data: r.rows})
	})
	.catch(err => {
		console.log(err.stack);
		res.sendStatus(500);
	})
}

export { getData };