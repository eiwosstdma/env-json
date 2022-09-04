# dotenv-for-json

A simple module to add json-file configuration directly to process.env.

> **Warning**
> Map it directly as it is within process.env, so nested Objects are still with the first key of the tree

### How to import :
```javascript
//ESM
import { envJson } from 'dotenv-for-json';
```

```javascript
//CJS
const { envJson } = require('dotenv-for-json');
```

```javascript
const { envJsonSync } = require('dotenv-for-json');
// You may want to use a synchronous version of the function, it works exactly the same.
```

It works directly within your typescript code.

### How to use :
```javascript
// How to use the function
await envJson(); // By default will search for a 'conf.json' file
await envJson('custom-file'); // Will search for a 'custom-file.json' file
```

```javascript
await envJson({ isPrefix: false }); // Will not put prefix before the name of the keys
await envJson({ isPrefix: true }); // Will prefix keys name with the file name and an underscore
await envJson({ isPrefix: true, prefixName: 'a' }); // Will prefix with a_ before keys name
```

```javascript
const isWorking = await envJson(); // Return a Promise<boolean>, true if it worked, false if a problem did happens
```


### Example and Result :
~/conf.json
```json
{
  "message": "hello world",
  "fun": 456
}
```
~/index.ts
```javascript
import { envJson } from 'dotenv-for-json';

(async () => {
  await envJson();
  
  const messageFromConf = process.env.conf_message;
  
  console.log(messageFromConf); // => 'hello world';
})();
```
