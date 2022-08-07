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
envJson(); // By default will search for a 'config.json' file
envJson('custom-file'); // Will search for a 'custom-file.json' file
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
const message = process.env.conf::message; // => 'Hello world'
const fun = process.env.conf::fun // => '456' As a String !
```
