# dotenv-for-json

A simple module to add json-file configuration directly to process.env.

### How to import :
```javascript
//ESM
import { envJson } from 'dotenv-for-json';
```

```javascript
//CJS
const { envJson } = require('dotenv-for-json');
```

It works directly within your typescript.

### How to use :
```javascript
// How to use the function
envJson(); // By default will search for a 'conf.json' file
envJson('custom-file'); // Will search for a 'custom-file.json' file
```
```javascript
envJson({ isPrefix: false }); // Will not put prefix before the name of the keys
envJson({ isPrefix: true, prefixName: 'a' }); // Will prefix with a_ before keys name
```

### Example and Result :

```json
{
  "message": "hello world",
  "fun": 456
}
```

```javascript
// How to find your data
import { envJson } from 'dotenv-for-json';
envJson(conf);
const message = process.env.conf_message; // => 'Hello world'
const fun = process.env.conf_fun // => '456' As a String !
```
