#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'jsintro'
  , title    : 'LEARNING JAVASCRIPT IS FUN!'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()