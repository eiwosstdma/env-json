const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');
const { readFile } = require('node:fs/promises');

/**
 * @param file { string? }
 * @param options {{ isPrefix: boolean, prefixName: string? }?}
 * @return {boolean}
 */
function envJsonSync (file, options) {
  const isPrefix = (typeof options?.isPrefix === 'boolean') ? options.isPrefix : true;
  const fileName = (file !== undefined) ? String(file) : 'conf';
  const prefixName = (typeof options?.prefixName === 'string') ? options.prefixName : fileName;
  const pathOfTheFile = resolve(process.cwd(), `${fileName}.json`);

  try {
    const fileData = readFileSync(pathOfTheFile);
    const parsedData = fileData.length === 0 ? { } : JSON.parse(fileData.toString('utf-8')) ;

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
  } catch(err) {
    console.log(err);
    return false;
  }
}

/**
 * @param file { string? }
 * @param options {{ isPrefix: boolean, prefixName: string? }?}
 * @return {Promise<boolean>}
 */
async function envJson (file, options) {
  const isPrefix = (typeof options?.isPrefix === 'boolean') ? options.isPrefix : true;
  const fileName = (file !== undefined) ? String(file) : 'conf';
  const prefixName = (typeof options?.prefixName === 'string') ? options.prefixName : fileName;
  const pathOfTheFile = resolve(process.cwd(), `${fileName}.json`);

  try  {
    const fileData = await readFile(pathOfTheFile);
    const parsedData = fileData.length === 0 ? { } : JSON.parse(fileData.toString('utf-8')) ;

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
  } catch(err) {
    console.log(err);
    return false;
  }
}

module.exports = {
  envJsonSync,
  envJson
};
