const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

/**
 * @param file { string? }
 * @param options { { isPrefix: boolean, prefixName: string? }? }
 * @return {boolean}
 */
function envJson (file, options) {
  const isPrefix = (typeof options?.isPrefix === 'boolean') ? options.isPrefix : true;
  const fileName = (file !== undefined) ? String(file) : 'conf';
  const prefixName = (typeof options?.prefixName === 'string') ? options.prefixName : fileName;
  const pathOfTheFile = resolve(process.cwd(), `${fileName}.json`);

  try {
    const fileData = readFileSync(pathOfTheFile);
    const parsedData = JSON.parse(fileData.toString());

    if (fileData.length === 0) {
      return false;
    }

    if (isPrefix) {
      for (const [key, value] of Object.entries(parsedData)) {
        process.env[`${prefixName}_${key}`] = String(value);
      }
    } else {
      for (const [key, value] of Object.entries(parsedData)) {
        process.env[`${key}`] = String(value);
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
