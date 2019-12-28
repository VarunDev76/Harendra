const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log("Successfully connected to the database");
}).catch((err) => {
	console.log("Could not connect to the database. Exiting now... ", err);
	process.exit()
});
const port = process.env.PORT || 8080; 
const router = require('./app/routes/router'); 
router.get('/', function(req, res) {
	res.json({ message: 'Welcome to our api!' });   
});
app.use('/api', router);

app.listen(port, () =>{
	console.log(`Server is listening on ${port}`);
});