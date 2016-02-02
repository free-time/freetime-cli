#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const slug = require('slug');
const moment = require('moment');
const questions = require('./questions');
const jekyllTemplate = require('./jekyll-template');

const getSlugifiedTitle = (answers) => {
  const date = moment(answers.date).format('YYYY-MM-DD');
  return slug(`${date} ${answers.title}`, '-');
};

inquirer.prompt(questions, answers => {
  answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
  answers.filename = getSlugifiedTitle(answers);
  const filePath = path.resolve('.', '_posts', `${answers.filename}.md`);
  fs.writeFile(filePath, jekyllTemplate(answers), (err) => {
    if(err) throw err;
  });
});
