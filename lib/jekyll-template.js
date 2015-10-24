'use strict';

let path = require('path');

module.exports = function jekyllTemplate(answers) {
  return `
    ---
    layout: post
    title: ${answers.title || 'Unknown'}
    date: ${answers.date}
    duration: ${answers.duration || '0min'}
    tags: [ ${answers.tags || 'uncategorized'} ]
    img: /assets/image/speakers/${answers.imageName || 'no-image.jpg'}
    link: ${answers.link}
    ---
  `.replace(/^(?:\n|\s{2,4})/gm, '');
}
