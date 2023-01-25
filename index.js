const express = require('express');
const { format } = require('date-fns');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/error', () => {
	throw new Error('Error has happened');
});

app.use('/', (request, response) => {
	return response.send(`Hello ${request.method} request from ${request.originalUrl}, today is a ${format(new Date, 'eeee')}`);
});

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}/`));

