const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('chef-recipe-hunter-server-side is running')
});

app.listen(port, () => {
    console.log(`chef-recipe-hunter-server-side API is running on port: ${port}`)
})