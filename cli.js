'use strict'

const chalk = require('chalk')
const sh = require('shell-exec')
const boxen = require('boxen')

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'double',
    dimBorder: true,
    borderColor: 'magenta'
  }

const api = 'https://www.uuidgenerator.net/api/guid';
sh(`curl ${api}`).then(result => console.log(chalk.white(boxen(`${result.stdout}`, options))))