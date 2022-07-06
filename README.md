This package is now deprecated. HTTP status codes used by Mapistry now live in an enum in [mapistry-shared]([url](https://github.com/Mapistry/mapistry-shared/src/consts)). Replacement is straightforward, and should be done gradually as code using the `httpStatusCodes` package is touched:

```
// in existing code
httpCodes = require('httpStatusCodes');
....
ret = httpCodes.SUCCESS

// replace with
import { HttpStatusCode } from 'mapistry-shared';
...
ret = HttpStatusCode.SUCCESS 
```
