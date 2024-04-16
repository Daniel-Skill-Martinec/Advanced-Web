const express = require('express')
const port = 5001;

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send({message: 'Welcome to the Random Ideas'});
})

const ideaRouter = require('./routes/ideas');
app.use('/api/ideas', ideaRouter);

app.listen(port, () => console.log(`Server listening on port ${port}`));