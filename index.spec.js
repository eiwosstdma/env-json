const assert = require('node:assert/strict');
const { existsSync, writeFileSync, rmSync } = require('node:fs');
const { resolve } = require('node:path');
const { envJson } = require('./index.js');

const testIndex = () => {
  const nameOfTheFile = 'configure';
  const pathOfTheFile = resolve(process.cwd(), `${nameOfTheFile}.json`);
  const dataOfTheFile = { hello: 'world' };

  console.log(pathOfTheFile);

  writeFileSync(pathOfTheFile, JSON.stringify(dataOfTheFile));

  const something = envJson(nameOfTheFile);

  console.log(process.env);

  rmSync(pathOfTheFile);

  assert.deepEqual(something, true);
};

testIndex();
