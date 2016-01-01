'use strict';

function getJekyllTemplate(answers) {
  return `
    ---
    layout: post
    title: ${answers.title || 'Unknown'}
    speakers: ${answers.speakers || 'Unknown'}
    date: ${answers.date}
    duration: ${answers.duration || '0min'}
    tags: [ ${answers.tags || 'uncategorized'} ]
    img: ${getImagePath(answers)}
    link: ${answers.link}
    ---
  `.replace(regexSpaceAtBegin(), '');
};

function getImagePath(answers) {
  let hasFullPath = /\//.test(answers.imageName);
  return hasFullPath
    ? answers.imageName
    : `/assets/image/speakers/${answers.imageName || 'no-image.jpg'}`;
}

function regexSpaceAtBegin() {
  return /^(?:\n|\s{2,4})/gm;
}

module.exports = getJekyllTemplate;

