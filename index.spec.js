const { deepStrictEqual } = require('node:assert');
const { resolve } = require('node:path');
const { writeFileSync, rmSync } = require('node:fs');

const { envJson, envJsonSync } = require('./index.js');

(async () => {
  const pathToFile = resolve('./conf.json');
  const obj = { hello: 'world' };
  try {
    writeFileSync(pathToFile, JSON.stringify(obj));

    await envJson();

    deepStrictEqual(process.env.conf_hello, 'world');
    console.log(process.env.conf_hello)
  } catch (err) {
    console.log(err);
  }

  rmSync(pathToFile);
})();
