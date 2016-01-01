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
  let filePath = `_posts/${answers.filename}.md`;
  fs.writeFile(filePath, jekyllTemplate(answers), successWrite);
});

function getSlugifiedTitle(answers) {
  let date = moment(answers.date).format('YYYY-MM-DD');
  return slug(`${date} ${answers.title}`, '-');
}

function jekyllTemplate(answers) {
  return require('./jekyll-template')(answers);
}

function successWrite(err) {
  if(err) throw err;
}
