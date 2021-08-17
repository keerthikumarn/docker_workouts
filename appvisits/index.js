const express = require('express');
const redis = require('redis');

const process = require('process');
const app = express();

const client = redis.createClient({
	host: 'redis-server',
	port: 4002,
});

client.set('visits' ,0);

app.get('/', (req, res) => {
	//process.exit(0);
	client.get('visits', (err, visits) => {
		res.send('Number of visits made on this page : '+visits);
		client.set('visits', parseInt(visits) + 1);
	});
});


app.listen(8080, () => {
   console.log('Listening to port 8080 ...');
});
