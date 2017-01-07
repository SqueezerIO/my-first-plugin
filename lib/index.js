'use strict';

/**
 * My first plugin lib  .
 */
class MyFirstPluginHooks {
  constructor(sqz) {
    this.sqz = sqz;
    this.Promise = this.sqz.utils.bluebird();
    this.params = this.sqz.cli.params.get();
    this.colors = this.sqz.utils.colors();
  }

  before() {
    return new this.Promise((resolve) => {
      this.sqz.cli.log.info(`Showing message ${this.colors.blue(this.params.options.msg[0])}` +
        ` before the ${this.colors.blue('project:validate')} event!`);

      resolve();
    });
  }

  after() {
    return new this.Promise((resolve) => {
      this.sqz.cli.log.info(`Showing message ${this.colors.blue(this.params.options.msg[0])}` +
        ` after the ${this.colors.blue('project:validate')} event!`);

      resolve();
    });
  }

  final() {
    return new this.Promise((resolve) => {
      this.sqz.cli.log.info(`Showing message ${this.colors.blue(this.params.options.msg[0])}` +
        ` after the final of the deployment lifecycle !`);

      resolve();
    });
  }
}

module.exports = MyFirstPluginHooks;
