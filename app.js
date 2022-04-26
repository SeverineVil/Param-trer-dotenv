require('dotenv').config();
const express = require('express') ;

console.log(`The server will run on port ${process.env.SERVER_PORT}`);
console.log(`I am ${process.env.USER}, wilder in ${process.env.CITY}, and I love ${process.env.LANGUAGE}`);