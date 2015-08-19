#!/usr/bin/env node
'use strict';

var inquirer = require('inquirer');
var fs = require('fs');
var slug = require('slug');
var moment = require('moment');
var questions = require('./questions');

inquirer.prompt(questions, function(answers) {
  answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
  answers.filename = getSlugifiedTitle(answers);
  console.log(answers);
});

function getSlugifiedTitle(answers) {
  var date = moment(answers.date).format('YYYY-MM-DD');
  return slug([ date, answers.title ].join('-'));
}
