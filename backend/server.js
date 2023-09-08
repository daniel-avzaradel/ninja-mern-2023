const express = require('express');


const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the app'})
})

app.listen(PORT, () => {
    console.log('Server is running on PORT: ', PORT)
});