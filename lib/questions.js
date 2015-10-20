'use strict';

exports = module.exports = [
  {
    name: 'title',
    type: 'input',
    message: 'Title:'
  },{
    name: 'duration',
    type: 'input',
    message: 'Duration:'
  },{
    name: 'tags',
    type: 'input',
    message: 'Tags (separated by commas):'
  },{
    name: 'imagePath',
    type: 'input',
    message: 'Image Path: ./assets/image/speakers/'
  },{
    name: 'link',
    type: 'input',
    message: 'URL:'
  },{
    name: 'pathToSave',
    type: 'input',
    message: 'Path to save:',
    'default': './_posts'
  }
];
