


/*import connectToMongo from './database/db.js';
import express from 'express';
import cors from 'cors';
import payment from './routes/payment.js';

connectToMongo();
const app = express()

const port = process.env.PORT
// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Kamal Nayan')
})

app.use('/api/payment', payment);
    
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
*/



import connectToMongo from './database/db.js';
import express from 'express';
import cors from 'cors';
import payment from './routes/payment.js';

connectToMongo();
const app = express();

const port = process.env.PORT || 3000; // Ensure a default port
// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Kamal Nayan');
});

app.use('/api/payment', payment);

// Bind to 0.0.0.0 for Render
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});




