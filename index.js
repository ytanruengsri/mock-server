#!/usr/bin/env node

const startServer = require('./server');

const DEFAULT_LATENCY = 10; // ms
const DEFAULT_PORT = 3000;
const DEFAULT_HOST = 'localhost';

const argv = require('yargs')
    .alias('c', 'config')
    .describe('c', 'Server configuration')
    .alias('p', 'port')
    .describe('p', 'Server port')
    .alias('h', 'host')
    .describe('h', 'Server host')
    .alias('d', 'data')
    .describe('d', 'Mock json data')
    .alias('l', 'latency')
    .describe('l', 'Response latency')
    .default('port', DEFAULT_PORT)
    .default('host', DEFAULT_HOST)
    .help('help')
    .argv;

const server = startServer(argv);
module.exports = server;