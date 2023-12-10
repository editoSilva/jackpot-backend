const express = require('express');
const router = require("./routes");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.use(router);

router.get('/', (req, res) => {
    res.send('O router está funcionando perfeitamente!');
});

app.listen(PORT, HOST);