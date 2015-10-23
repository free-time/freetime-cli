#!/usr/bin/env node
'use strict';

let fs = require('fs');
let path = require('path');
let inquirer = require('inquirer');
let slug = require('slug');
let moment = require('moment');
let questions = require('./questions');

inquirer.prompt(questions, answers => {
  answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
  answers.filename = getSlugifiedTitle(answers);
  let filePath = getFilePath(answers);
  fs.writeFile(filePath, fileData(answers), successWrite);
});

function getSlugifiedTitle(answers) {
  let date = moment(answers.date).format('YYYY-MM-DD');
  return slug([ date, answers.title ].join('-'));
}

function getFilePath(answers) {
  let defaultPath = `${( answers.pathToSave || '.' )}/`;
  return path.normalize([defaultPath, answers.filename, '.md'].join(''));
}

function fileData(answers) {
  return require('./jekyll-template')(answers);
}

function successWrite(err) {
  if( err ) throw err;
}
