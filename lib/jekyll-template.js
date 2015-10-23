'use strict';

let path = require('path');

module.exports = function jekyllTemplate(answers) {
  return `
    ---
    layout: post
    title: ${answers.title}
    date: ${answers.date}
    duration: ${answers.duration}
    tags: [ ${answers.tags} ]
    img: /assets/image/speakers/${answers.imagePath}
    link: ${answers.link}
    ---
  `.replace(/^(?:\n|\s{2,4})/gm, '');
}
