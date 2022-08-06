const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

/**
 * Either use a file name or let it undefined if you're using the default "config.json" from the root application directory.
 * @param file { string | undefined }
 * @return void
 */
const dotJson = (file) => {
  const fileName = (typeof file === 'string') ? file : 'config';
  const pathToTheFile = resolve(process.cwd(), fileName);

  try {
    const fileData = readFileSync(pathToTheFile);
    const parsedData = JSON.parse(fileData.toString());

    if (fileData.length >= 1) {
      for (const { key, value } of parsedData) {
        process.env[`conf-${key}`] = value;
      }
    }
  } catch(e) {
    throw new Error(`Something goes wrong. Please verify that the file does exist.`);
  }
};

module.exports = {
  dotJson
};
