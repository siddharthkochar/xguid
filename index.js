'use strict'

const sh = require('shell-exec')

module.exports = async function() {
    const api = 'https://www.uuidgenerator.net/api/guid';

    var result = await sh(`curl ${api}`);
    return result.stdout;
}