'use strict';

class MyFirstPlugin {
  constructor(sqz) {
    this.sqz = sqz;

    this.commands = [
      {
        arg         : ['deploy'],
        summary     : '',
        description : '',
        lifecycle   : [
          'before:project:validate',
          'after:project:validate',
          'deploy:final'
        ],
        options     : {
          msg : {
            title        : 'your text message',
            description  : 'this is a simple message description',
            value        : true, // true if this option can have a value
            required     : true, // option required
            defaultValue : null, // add a default value
            validate     : {
              fn    : (val) => (val.length <= 100),
              error : 'your message can\'t contain more than 100 characters'
            }
          }
        },
      }
    ];
  }
}

module.exports = MyFirstPlugin;
