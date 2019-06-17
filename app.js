'use strict';
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');
const app = express();
app.use(cors(), bodyParser.json({ limit: '50mb' }), bodyParser.urlencoded({ extended: false }));