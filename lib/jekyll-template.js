var path = require('path');
module.exports = function jekyllTemplate(answers) {
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
  ];
}
