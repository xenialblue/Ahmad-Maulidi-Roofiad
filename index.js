import express from "express";
const app = express();
const port = 5000;
import axios from "axios";
import ejs from "ejs";
import path from "path";
import bodyParser from 'body-parser';

// set up body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// const dirname = path.dirname(new URL(import.meta.url).pathname).replace(/\\/g, '/');
// app.set('views', path.join(dirname, 'views'));

app.use('/public', express.static('public'));
// app.use(express.static('/public'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = response.data;
    res.render('home', { pengguna: data });
  } catch (error) {
    console.log(error);
  }
})

app.post('/submit-form', (req, res) => {
    console.log(req.body)
	// const name = req.body.namapeserta;
	// const email = req.body.ttl;

	// // do something with the form data
	// console.log(`Name: ${name}, Email: ${email}`);

	// // render a success message
	// res.send('Form submitted successfully!');
});

app.listen(port, () => {
    console.log(`Running di PORT:  http://localhost:${port}`);
});