import crypto from 'crypto';
import Express from 'express';
import {hash, compare} from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser';
import fs from 'fs'
import { fakeDB } from './fakeDB';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const _dirname = dirname(fileURLToPath(import.meta.url));

//bad idea
const JWT_SECRET = "{8367E87C-B794-4A04-89DD-15FE7FDBFF78}"
const JWT_REFRESH_SECRET = "{asdfasdfdsfa-B794-4A04-89DD-15FE7FDBFF78}"

const port = 8080;
const app = new Express();
app.use(Express.json());
app.use(cookieParser());
app.get('/', async(req, res) => {
	const token = req.cookies.JWT_TOKEN;
	if(token) {
		//found a token
	}
	else {
		res.sendFile(_dirname + "/login.html");
	}

})
app.get('/login', async(req, res) => {

})


app.post('/register', async(req, res) => {
	const { email, password } = req.body;
	
	try {
		const user = fakeDB.find(usr => usr.email == email);
		if(user) throw new Error('User already exists');
		const hashedPass = await hash(password, 10);
		fakeDB.push({
			id: fakeDB.length,
			email,
			password: hasedPassword,
		})
	} catch(err) {
		console.log(err);
	}
})













app.listen(port, () => {
	console.log(`listening on port ${port}`)

})






























