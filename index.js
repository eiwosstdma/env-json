const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

/**
 * @param file { string? }
 * @return {boolean}
 */
function envJson (file) {
  const fileName = (typeof file === 'string') ? file : 'config';
  const pathOfTheFile = resolve(process.cwd(), `${fileName}.json`);

  try {
    const fileData = readFileSync(pathOfTheFile);
    const parsedData = JSON.parse(fileData.toString());

    if (fileData.length >= 1) {
      for (const [key, value] of Object.entries(parsedData)) {
        process.env[`${fileName}::${key}`] = String(value);
      }
    }

    return true;
  } catch(e) {
    throw new Error(`Something goes wrong. Please verify that the file does exist.`);
  }
}

module.exports = {
  envJson
};
