#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var inquirer = require('inquirer');
var slug = require('slug');
var moment = require('moment');
var questions = require('./questions');

inquirer.prompt(questions, function(answers) {
  answers.date = moment().format('YYYY-MM-DD HH:mm:ss');
  answers.filename = getSlugifiedTitle(answers);
  var filePath = getFilePath(answers);
  fs.writeFile(filePath, fileData(answers), successWrite);
});

function getSlugifiedTitle(answers) {
  var date = moment(answers.date).format('YYYY-MM-DD');
  return slug([ date, answers.title ].join('-'));
}

function getFilePath(answers) {
  return path.normalize(
    ( answers.pathToSave || '.' ) + '/' + answers.filename + '.md'
  );
}

function fileData(answers) {
  return [
    '---',
    'layout: post',
    'date: ' + answers.date,
    'duration: ' + answers.duration,
    'categories: ' + answers.categories,
    'img: ' + path.normalize( answers.imagePath ),
    'link: ' + answers.link,
    '---',
    ''
  ].join('\n');
}

function successWrite(err) {
  if( err ) throw err;
}

/*
---
layout: post
title:  "Performance em CSS - Bernard De Luna"
date:   2015-02-22 16:58:00
duration: 1:00:43 min
categories: CSS Performace
img: /assets/image/speakers/bernard-de-luna.jpg
link: https://www.youtube.com/watch?v=m1iV2C44Duc
---
*/
