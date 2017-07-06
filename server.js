const express = require('express');

const start = (config) => {
    const {
        port,
    } = config;
    const app = express();

    app.listen(port, () => {
        console.log(`Server listening on port ${port}!`)
    });
};

module.exports = start;