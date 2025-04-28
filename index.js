const express = require('express');
const app = express();
const {rout}=require('./rout/rout');
app.use(rout);
